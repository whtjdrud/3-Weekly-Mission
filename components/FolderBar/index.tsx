import styles from './folderbar.module.css'
import FolderButton from '@/components/atomicComponents/FolderButton'

interface FolderBarProps {
  folders: {
    id: string
    name: string
  }[]
  onFolderClick: (id: string) => void
}
const FolderBar: React.FC<FolderBarProps> = ({ folders, onFolderClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles.folders}>
        <FolderButton
          key="all"
          text="전체"
          onClick={() => onFolderClick('all')}
        />
        {folders?.map(({ id, name }) => (
          <FolderButton
            key={id}
            text={name}
            onClick={() => onFolderClick(id)}
          />
        ))}
      </div>
    </div>
  )
}

export default FolderBar
