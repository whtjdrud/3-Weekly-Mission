import React, { useEffect, useState } from 'react'
import HeaderPage from '@/components/Header'
import Footer from '@/components/Footer'
import AddLink from '@/components/AddLink'
import SearchBar from '@/components/SearchBar'
import styles from '@/styles/folder.module.css'
import FolderBar from '@/components/FolderBar'
import { CardList } from '@/components/CardList'
import { CardListProps, FolderProps } from '@/types/folder'
import useGetLinkData from '@/libs/client/useGetLinkData'
import { fetchDataError } from '@/constants/errorMessage'
import axiosInstance from '@/libs/axiosInstance'

const Folder = ({ shareLink, folders }: FolderProps) => {
  const [selectedFolderId, setSelectedFolderId] = useState('all')
  const [links, setLinks] = useState<CardListProps['links']>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const linksData = await useGetLinkData(selectedFolderId)
        setLinks(linksData)
      } catch (error) {
        console.error(fetchDataError, error)
      }
    }
    fetchData()
  }, [selectedFolderId])

  return (
    <>
      <HeaderPage />
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

export async function getServerSideProps(context: { req: any }) {
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
      },
    }
  } catch (error) {
    console.error(fetchDataError, error)

    return {
      props: {
        email: null,
        image_source: null,
        folders: [],
        errorMessage: fetchDataError,
      },
    }
  }
}

export default Folder
