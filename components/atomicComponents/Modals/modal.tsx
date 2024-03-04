import styles from './modal.module.css'
import CloseButton from '@/components/atomicComponents/CloseButton'
import { ModalProps } from '@/types/modal'

const Modal = ({
  children,
  onCloseClick,
  themeColor,
  buttonText,
}: ModalProps) => {
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
