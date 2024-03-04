import styles from './closebutton.module.css'
import { CloseButtonProps } from '@/types/common'

const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <button onClick={onClick}>
      <img
        className={styles.close}
        src="/images/close.svg"
        alt="X모양 닫기 버튼"
      />
    </button>
  )
}

export default CloseButton
