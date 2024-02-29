import styles from './addLinkToFolder.module.css'
import { FC } from 'react'
import { FolderItem } from '@/components/atomicComponents/FolderItem'
import Modal from '@/components/atomicComponents/Modals/modal'

type AddLinkToFolderProps = {
  folders: {
    id: string
    createdAt: string
    name: string
    userId: number
    linkCount: number
  }[]
  isOpen: boolean
  description: string
  onCloseClick: () => void
  themeColor: string
  buttonText: string
  selectedFolderId: string
  setSelectedFolderId: (id: string) => void
}

const AddLinkToFolder: FC<AddLinkToFolderProps> = ({
  isOpen,
  folders,
  description,
  themeColor,
  buttonText,
  onCloseClick,
  selectedFolderId,
  setSelectedFolderId,
}) => {
  if (!isOpen) return null

  return (
    <Modal
      buttonText={buttonText}
      onCloseClick={onCloseClick}
      themeColor={themeColor}
    >
      <h2 className={styles.title}>폴더에 추가</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.modalContent}>
        <div className={styles.folderList}>
          {folders?.map(({ id, name, linkCount }) => (
            <FolderItem
              key={id}
              isSelected={id === selectedFolderId}
              folderName={name}
              linkCount={linkCount}
              onClick={() => setSelectedFolderId(id)}
            />
          ))}
        </div>
      </div>
    </Modal>
  )
}

export default AddLinkToFolder
