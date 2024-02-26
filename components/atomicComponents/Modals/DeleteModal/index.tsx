import styles from './delteModal.module.css'
import { FC, MouseEventHandler } from 'react'

type DeleteModalProps = {
  title: string
  buttonText: string
  isOpen: boolean
  themeColor: string
  description: string
  onCloseClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement>
}

const Modal: FC<DeleteModalProps> = ({
  isOpen,
  title,
  buttonText,
  themeColor,
  description,
  onCloseClick,
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
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <div className={styles.modalContent}>
            <button className={`${styles.button} ${styles[themeColor]}`}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
