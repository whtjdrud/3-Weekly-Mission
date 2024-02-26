import styles from './inputModal.module.css'
import { ChangeEventHandler, FC, MouseEventHandler } from 'react'

type InputModalProps = {
  title: string
  placeholder: string
  buttonText: string
  isOpen: boolean
  value: string
  themeColor: string
  onChange: ChangeEventHandler<HTMLInputElement>
  onCloseClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement>
}

const Modal: FC<InputModalProps> = ({
  isOpen,
  title,
  placeholder,
  buttonText,
  value,
  onChange,
  themeColor,
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
          <div className={styles.modalContent}>
            <input
              type="text"
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className={styles.input}
            />

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
