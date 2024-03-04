import styles from './delteModal.module.css'
import Modal from '@/components/atomicComponents/Modals/modal'
import { DeleteModalProps } from '@/types/modal'

const DeleteModal = ({
  isOpen,
  title,
  buttonText,
  themeColor,
  description,
  onCloseClick,
}: DeleteModalProps) => {
  if (!isOpen) return null

  return (
    <Modal
      buttonText={buttonText}
      onCloseClick={onCloseClick}
      themeColor={themeColor}
    >
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.modal_content}></div>
    </Modal>
  )
}

export default DeleteModal
