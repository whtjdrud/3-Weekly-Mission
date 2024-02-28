import styles from './folderinfo.module.css'

const FolderInfo = ({
  profileImage,
  ownerName,
  folderName,
}: {
  profileImage: string
  ownerName: string
  folderName: string
}) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.profile}
        src={profileImage}
        alt="폴더 소유자 프로필 이미지"
      />
      <span className={styles.owner}>{ownerName}</span>
      <h2 className={styles.folder}>{folderName}</h2>
    </div>
  )
}

export default FolderInfo
