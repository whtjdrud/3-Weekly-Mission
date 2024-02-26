import styles from './addLinkToFolder.module.css'
import { Dispatch, FC, SetStateAction } from 'react'
import { FolderItem } from '@/components/atomicComponents/FolderItem'

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
  onAddClick: () => void
  onCloseClick: () => void
  themeColor: string
  buttonText: string
  selectedFolderId: string | null
  setSelectedFolderId: Dispatch<SetStateAction<string | null>>
}

type FolderItemProps = {
  isSelected: boolean
  folderName: string
  linkCount: number
  onClick: () => void
}

const Modal: FC<AddLinkToFolderProps> = ({
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
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <button onClick={onCloseClick}>
          <img
            className={styles.close}
            src="/images/close.svg"
            alt="X모양 닫기 버튼"
          />
        </button>
        <div className={styles.items}>
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
          <button className={`${styles.button} ${styles[themeColor]}`}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
