import styles from './addLinkToFolder.module.css'
import { FolderItem } from '@/components/atomicComponents/FolderItem'
import Modal from '@/components/atomicComponents/Modals/modal'
import { AddLinkToFolderProps } from '@/types/modal'

const AddLinkToFolder = ({
  isOpen,
  folders,
  description,
  themeColor,
  buttonText,
  onCloseClick,
  selectedFolderId,
  setSelectedFolderId,
}: AddLinkToFolderProps) => {
  if (!isOpen) return null

  return (
    <Modal
      buttonText={buttonText}
      onCloseClick={onCloseClick}
      themeColor={themeColor}
    >
      <h2 className={styles.title}>폴더에 추가</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.modal_content}>
        <div className={styles.folder_list}>
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
