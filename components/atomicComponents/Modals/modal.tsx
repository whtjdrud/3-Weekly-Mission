import styles from './modal.module.css'
import { MouseEventHandler, ReactNode } from 'react'
import CloseButton from '@/components/atomicComponents/CloseButton'

const Modal = ({
  children,
  onCloseClick,
  themeColor,
  buttonText,
}: {
  children: ReactNode
  onCloseClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement>
  themeColor?: string
  buttonText?: string
}) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <CloseButton onClick={onCloseClick} />
        <div className={styles.items}>
          {children}

          {themeColor && (
            <button className={`${styles.button} ${styles[themeColor]}`}>
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal
