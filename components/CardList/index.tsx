import styles from './cardlist.module.css'
import { useEffect, useRef, useState } from 'react'
import { Card } from '@/components/atomicComponents/Card'
import DeleteModal from '@/components/atomicComponents/Modals/DeleteModal'
import { MODALS_ID } from '@/components/FolderBar/constants'
import AddLinkToFolder from '@/components/atomicComponents/Modals/AddLinkToFolder'
import { useGetFolders } from '@/libs/client/useGetFolders'
type CardListProps = {
  links: {
    id: number
    title: string
    url: string
    imageSource: string
    alt: string
    description: string
    elapsedTime: string
    createdAt: string
  }[]
}
interface folder {
  id: number
  createdAt: string
  name: string
  userId: number
  linkCount: number
}
export const CardList = ({ links }: CardListProps) => {
  const cardListRef = useRef(null)
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null)
  const [currentModal, setCurrentModal] = useState<string | null>(null)
  const [selectedLinkUrl, setSelectedLinkUrl] = useState<string>('')
  const [folders, setFolders] = useState<folder[]>([]) // 상태를 추가합니다.

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const folders = await useGetFolders()
        setFolders(folders)
      } catch (error) {
        console.error('폴더를 가져오는데 실패했습니다:', error)
      }
    }
    fetchFolders()
  }, [])
  const closeModal = () => setCurrentModal(null)
  return (
    <div className={styles.container} ref={cardListRef}>
      {links.map((link, index) => (
        <Card
          key={link?.id}
          {...link}
          onDeleteClick={() => {
            setSelectedLinkUrl(link?.url ?? '')
            setCurrentModal(MODALS_ID.deleteLink)
          }}
          onAddToFolderClick={() => {
            setSelectedLinkUrl(link?.url ?? '')
            setCurrentModal(MODALS_ID.addToFolder)
          }}
        />
      ))}

      <DeleteModal
        isOpen={currentModal === MODALS_ID.deleteLink}
        title="링크 삭제"
        description={selectedLinkUrl}
        buttonText="삭제하기"
        onCloseClick={closeModal}
        themeColor="red"
      />
      <AddLinkToFolder
        isOpen={currentModal === MODALS_ID.addToFolder}
        folders={folders}
        description={selectedLinkUrl}
        onAddClick={() => {}}
        onCloseClick={() => {
          setSelectedFolderId(null)
          closeModal()
        }}
        themeColor="blue"
        buttonText="추가하기"
      />
    </div>
  )
}
