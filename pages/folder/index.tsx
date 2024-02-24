import HeaderPage from '@/components/Header'
import Footer from '@/components/Footer'
import AddLink from '@/components/AddLink'
import SearchBar from '@/components/SearchBar'
import styles from '@/styles/folder.module.css'
import FolderBar from '@/components/FolderBar'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CardList } from '@/components/CardList'

const Folder = ({
  email,
  image_source,
  folders,
}: {
  email: string
  image_source: string
  folders: {
    folder: {
      id: string
      name: string
    }[]
  }
}) => {
  const [selectedFolderId, setSelectedFolderId] = useState('all')
  const [links, setLinks] = useState([])
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  useEffect(() => {
    const fetchData = async (folderId: string) => {
      const accessToken = sessionStorage.getItem('accessToken')
      const queryString = folderId === 'all' ? '' : `?folderId=${folderId}`

      try {
        const res = await axios.get(
          `https://bootcamp-api.codeit.kr/api/links${queryString}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        )
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
  try {
    const { req } = context
    const { cookies } = req
    const accessToken = cookies.access_token

    const [userResponse, folderResponse] = await Promise.all([
      axios.get('https://bootcamp-api.codeit.kr/api/users', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
      axios.get('https://bootcamp-api.codeit.kr/api/folders', {
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
