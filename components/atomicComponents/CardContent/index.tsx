import styles from './cardcontent.module.css'

type CardContentProps = {
  elapsedTime: string
  description: string
  createdAt: string
}

export const CardContent = ({
  elapsedTime,
  description,
  createdAt,
}: CardContentProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.elapsedTime}>{elapsedTime}</span>
      <p className={styles.description}>{description}</p>
      <span className={styles.createdAt}>{createdAt}</span>
    </div>
  )
}
