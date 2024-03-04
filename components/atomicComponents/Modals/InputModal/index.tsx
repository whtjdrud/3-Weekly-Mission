import styles from './inputModal.module.css'
import Modal from '@/components/atomicComponents/Modals/modal'
import { InputModalProps } from '@/types/modal'

const InputModal = ({
  isOpen,
  title,
  placeholder,
  buttonText,
  value,
  onChange,
  themeColor,
  onCloseClick,
}: InputModalProps) => {
  if (!isOpen) return null
  return (
    <Modal
      buttonText={buttonText}
      onCloseClick={onCloseClick}
      themeColor={themeColor}
    >
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.modal_content}>
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
