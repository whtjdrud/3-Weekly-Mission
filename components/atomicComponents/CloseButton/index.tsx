import React, { MouseEventHandler } from 'react'
import styles from './closebutton.module.css'
interface CloseButtonProps {
  onClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement>
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
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
