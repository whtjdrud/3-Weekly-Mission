import styles from './cardlist.module.css'
import { useEffect, useState } from 'react'
import { Card } from '@/components/atomicComponents/Card'
import DeleteModal from '@/components/atomicComponents/Modals/DeleteModal'
import { MODALS_ID } from '@/constants/folder'
import AddLinkToFolder from '@/components/atomicComponents/Modals/AddLinkToFolder'
import { useGetFolders } from '@/libs/client/useGetFolders'
import { Folder, Links } from '@/types/folder'
import NoLink from '@/components/NoLink'
import { fetchFolderDataError } from '@/constants/errorMessage'

export const CardList = ({ links }: { links: Links[] }) => {
  const [selectedFolderId, setSelectedFolderId] = useState<string>('all')
  const [currentModal, setCurrentModal] = useState<string>('')
  const [selectedLinkUrl, setSelectedLinkUrl] = useState<string>('')
  const [folders, setFolders] = useState<Folder[]>([])

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const folders = await useGetFolders()
        setFolders(folders)
      } catch (error) {
        console.error(fetchFolderDataError, error)
      }
    }
    fetchFolders()
  }, [])
  const closeModal = () => setCurrentModal('')

  if (links === undefined || links.length === 0) return <NoLink />
  return (
    <div className={styles.container}>
      {links.map((link, index) => (
        <Card
          key={index}
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
        onCloseClick={() => {
          setSelectedFolderId('all')
          closeModal()
        }}
        themeColor="blue"
        buttonText="추가하기"
        selectedFolderId={selectedFolderId}
        setSelectedFolderId={setSelectedFolderId}
      />
    </div>
  )
}
