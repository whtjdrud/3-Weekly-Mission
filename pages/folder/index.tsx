import React, { useEffect, useState } from 'react'
import HeaderPage from '@/components/Header'
import Footer from '@/components/Footer'
import AddLink from '@/components/AddLink'
import SearchBar from '@/components/SearchBar'
import styles from '@/styles/folder.module.css'
import FolderBar from '@/components/FolderBar'
import { CardList } from '@/components/CardList'
import { CardListProps, FolderProps } from '@/types/folder'
import axiosServer from '@/libs/axiosServer'
import useGetLinkData from '@/libs/client/useGetLinkData'

const Folder = ({ shareLink, folders }: FolderProps) => {
  const [selectedFolderId, setSelectedFolderId] = useState('all')
  const [links, setLinks] = useState<CardListProps['links']>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const linksData = await useGetLinkData(selectedFolderId)
        setLinks(linksData)
      } catch (error) {
        console.error('링크 데이터를 가져오는 중 에러가 발생했습니다:', error)
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
  const url = `${proto}://${host}${context.req?.url}`
  const accessToken = context.req?.cookies.accessToken

  try {
    const folderResponse = await axiosServer.get('/folders', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    return {
      props: {
        folders: folderResponse.data.data || [],
        shareLink: url,
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

export default Folder
