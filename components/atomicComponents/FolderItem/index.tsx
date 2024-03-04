import styles from './folderItems.module.css'
import { FolderItemProps } from '@/types/folder'

export const FolderItem = ({
  folderName,
  linkCount,
  isSelected = false,
  onClick,
}: FolderItemProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.name}>{folderName}</span>
      <span className={styles.count}>{linkCount}개 링크</span>
      {isSelected && (
        <img
          className={styles.check}
          src="/images/check.svg"
          alt="체크 아이콘"
        />
      )}
    </button>
  )
}
