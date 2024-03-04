import React, { useEffect, useState } from 'react'
import HeaderPage from '@/components/Header'
import Footer from '@/components/Footer'
import AddLink from '@/components/AddLink'
import SearchBar from '@/components/SearchBar'
import styles from '@/styles/folder.module.css'
import FolderBar from '@/components/FolderBar'
import { CardList } from '@/components/CardList'
import { FolderProps, Links } from '@/types/folder'
import useGetLinkData from '@/libs/client/useGetLinkData'
import { FETCH_DATA_ERROR } from '@/constants/errorMessage'
import axiosInstance from '@/libs/axiosInstance'
import { withAuth } from '@/contexts/AuthProvider'
import { User } from '@/types/user'
import { GetServerSidePropsContext } from 'next'

const Folder = ({ user, shareLink, folders }: FolderProps) => {
  const [selectedFolderId, setSelectedFolderId] = useState('all')
  const [links, setLinks] = useState<Links[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const linksData = await useGetLinkData(selectedFolderId)
        setLinks(linksData)
      } catch (error) {
        console.error(FETCH_DATA_ERROR, error)
      }
    }
    fetchData()
  }, [selectedFolderId])

  return (
    <>
      <HeaderPage user={user} />
      <div className={styles.container}>
        <AddLink />
        <main className={styles.items}>
          <SearchBar />
          <div className={styles.folderBox}>
            <FolderBar
              folders={folders}
              selectedFolderId={selectedFolderId}
              onFolderClick={setSelectedFolderId}
              shareLink={shareLink}
            />
          </div>
          <CardList links={links} />
        </main>
      </div>
      <Footer />
    </>
  )
}

export const getServerSideProps = withAuth(
  async (context: GetServerSidePropsContext, user: User) => {
    const { host, 'x-forwarded-proto': proto = 'http' } =
      context.req?.headers || {}
    const url = `${proto}://${host}/shared`
    const accessToken = context.req?.cookies.accessToken

    try {
      const folderResponse = await axiosInstance.get('/folders', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })

      return {
        props: {
          folders: folderResponse.data || [],
          shareLink: url,
          user: user,
        },
      }
    } catch (error) {
      console.error(FETCH_DATA_ERROR, error)

      return {
        props: {
          user: user,
          folders: [],
          shareLink: url,
        },
      }
    }
  },
)

export default Folder
