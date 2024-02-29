import styles from './nolink.module.css'
export const NoLink = () => {
  return (
    <div className={styles.container}>
      <span className={styles.message}>저장된 링크가 없습니다</span>
    </div>
  )
}

export default NoLink
