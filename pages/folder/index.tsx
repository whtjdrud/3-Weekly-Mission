import React, { useEffect, useState } from 'react'
import HeaderPage from '@/components/Header'
import Footer from '@/components/Footer'
import AddLink from '@/components/AddLink'
import SearchBar from '@/components/SearchBar'
import styles from '@/styles/folder.module.css'
import FolderBar from '@/components/FolderBar'
import { CardList } from '@/components/CardList'
import axiosClient from '@/libs/axiosClient'
import { FolderProps } from '@/types/folder'
import axiosServer from '@/libs/axiosServer'

const Folder = ({ email, image_source, folders }: FolderProps) => {
  const [selectedFolderId, setSelectedFolderId] = useState('all')
  const [links, setLinks] = useState([])
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  useEffect(() => {
    const fetchData = async (folderId: string) => {
      const queryString = folderId === 'all' ? '' : `?folderId=${folderId}`

      try {
        const res = await axiosClient.get(`/links${queryString}`)
        setLinks(res.data.data.folder)
      } catch (error) {
        console.error('API 호출 중 에러 발생:', error)
      }
    }
    fetchData(selectedFolderId)
  }, [selectedFolderId])

  return (
    <>
      <HeaderPage email={email} image_source={image_source} />
      <div className={styles.container}>
        <AddLink />
        <main className={styles.items}>
          <SearchBar />
          <div className={styles.folderBox}>
            <FolderBar
              folders={folders}
              selectedFolderId={selectedFolderId}
              onFolderClick={setSelectedFolderId}
              openModal={openModal}
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
  const {
    cookies: { accessToken },
  } = context.req

  try {
    const [userResponse, folderResponse] = await Promise.all([
      axiosServer.get('/users', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
      axiosServer.get('/folders', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    ])

    return {
      props: {
        email: userResponse.data.data[0]?.email || null,
        image_source: userResponse.data.data[0]?.image_source || null,
        folders: folderResponse.data.data || [],
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
