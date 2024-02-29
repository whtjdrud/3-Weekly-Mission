import styles from './delteModal.module.css'
import { FC, MouseEventHandler } from 'react'
import Modal from '@/components/atomicComponents/Modals/modal'

type DeleteModalProps = {
  title: string
  buttonText: string
  isOpen: boolean
  themeColor: string
  description: string
  onCloseClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement>
}

const DeleteModal: FC<DeleteModalProps> = ({
  isOpen,
  title,
  buttonText,
  themeColor,
  description,
  onCloseClick,
}) => {
  if (!isOpen) return null

  return (
    <Modal
      buttonText={buttonText}
      onCloseClick={onCloseClick}
      themeColor={themeColor}
    >
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.modalContent}></div>
    </Modal>
  )
}

export default DeleteModal
