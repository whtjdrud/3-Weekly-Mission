import styles from './folderbutton.module.css'
import React, { MouseEventHandler, useState } from 'react'

type FolderButtonProps = {
  text: string
  onClick: MouseEventHandler<HTMLButtonElement>
  isSelected?: boolean
}

const FolderButton: React.FC<FolderButtonProps> = ({
  text,
  onClick,
  isSelected = false,
}) => {
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
