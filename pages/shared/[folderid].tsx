import React from 'react'
import HeaderPage from '@/components/Header'
import Footer from '@/components/Footer'
import SearchBar from '@/components/SearchBar'
import styles from '@/styles/folder.module.css'
import { CardList } from '@/components/CardList'
import { ShareProps } from '@/types/folder'
import axiosInstance from '@/libs/axiosInstance'
import FolderInfo from '@/components/FolderInfo'
import { withAuth } from '@/contexts/AuthProvider'

const Share = ({ user, links, folderName }: ShareProps) => {
  return (
    <>
      <HeaderPage user={user} />
      <div className={styles.container}>
        <FolderInfo
          profileImage={user?.image_source}
          ownerName={user?.name}
          folderName={folderName}
        />
        <main className={styles.items}>
          <SearchBar />
          <CardList links={links} />
        </main>
      </div>
      <Footer />
    </>
  )
}

export const getServerSideProps = withAuth(async (context, user) => {
  const { folderid } = context.query

  try {
    const userId = user.id

    const {
      cookies: { accessToken },
    } = context.req
    const folderResponse = await axiosInstance.get(`/folders/${folderid}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    const url = `/users/${userId}/links?folderId=${folderid}`
    const linkResponse = await axiosInstance.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    return {
      props: {
        folderName: folderResponse.data[0]?.name || null,
        user: user,
        links: linkResponse.data,
      },
    }
  } catch (error) {
    console.error('Fetch data error', error)
    return {
      props: {
        folderName: null,
        ownerName: null,
        email: null,
        image_source: null,
        links: [],
        errorMessage: 'Fetch data error',
      },
    }
  }
})

export default Share
