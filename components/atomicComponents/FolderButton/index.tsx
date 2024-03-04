import styles from './folderbutton.module.css'
import React from 'react'
import { FolderButtonProps } from '@/types/folder'

const FolderButton = ({ text, onClick, isSelected }: FolderButtonProps) => {
  return (
    <button
      className={`${styles.container} ${isSelected ? styles.selected : ''}`}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  )
}

export default FolderButton
