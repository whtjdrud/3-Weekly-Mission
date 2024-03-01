import React from 'react'
import HeaderPage from '@/components/Header'
import Footer from '@/components/Footer'
import SearchBar from '@/components/SearchBar'
import styles from '@/styles/folder.module.css'
import { CardList } from '@/components/CardList'
import { shareProps } from '@/types/folder'
import axiosInstance from '@/libs/axiosInstance'
import FolderInfo from '@/components/FolderInfo'

const Share = ({ folderName, ownerName, links, image_source }: shareProps) => {
  return (
    <>
      <HeaderPage />
      <div className={styles.container}>
        <FolderInfo
          profileImage={image_source}
          ownerName={ownerName}
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

export async function getServerSideProps(context: {
  req: { cookies: { accessToken: string } }
  query: { folderid: string }
}) {
  const {
    cookies: { accessToken },
  } = context.req

  const { folderid } = context.query

  try {
    const userResponse = await axiosInstance.get('/users', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const folderResponse = await axiosInstance.get(`/folders/${folderid}`)

    const userId = userResponse.data.data[0].id
    const url = `/users/${userId}/links?folderId=${folderid}`
    const linkResponse = await axiosInstance.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    return {
      props: {
        folderName: folderResponse.data.data[0].name || null,
        ownerName: userResponse.data.data[0].name,
        email: userResponse.data.data[0]?.email || null,
        image_source: userResponse.data.data[0]?.image_source || null,
        links: Array.from(linkResponse.data.data) || [],
      },
    }
  } catch (error) {
    console.error('Error fetching data:', error)

    return {
      props: {
        email: null,
        image_source: null,
        folders: [],
        errorMessage: '서버에서 데이터를 가져오는 중에 문제가 발생했습니다.',
      },
    }
  }
}

export default Share
