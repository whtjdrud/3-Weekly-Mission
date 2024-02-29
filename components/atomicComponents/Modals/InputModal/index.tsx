import styles from './inputModal.module.css'
import { ChangeEventHandler, FC, MouseEventHandler } from 'react'
import Modal from '@/components/atomicComponents/Modals/modal'

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

const InputModal: FC<InputModalProps> = ({
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
    <Modal
      buttonText={buttonText}
      onCloseClick={onCloseClick}
      themeColor={themeColor}
    >
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.modalContent}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={styles.input}
        />
      </div>
    </Modal>
  )
}
export default InputModal
