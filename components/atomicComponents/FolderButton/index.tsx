import styles from './folderbutton.module.css'
import React from 'react'

interface FolderButtonProps {
  text: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const FolderButton = ({ text, onClick }: FolderButtonProps) => (
  <button className={styles.container} onClick={onClick}>
    <span>{text}</span>
  </button>
)

export default FolderButton
