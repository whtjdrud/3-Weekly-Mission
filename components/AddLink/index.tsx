import styles from './AddLink.module.css'
import Image from 'next/image'
const AddLink = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.input_box}>
          <Image
            className={styles.icon}
            src="images/link.svg"
            alt="링크 아이콘"
            height={20}
            width={20}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="링크를 추가해 보세요"
          />
        </div>
        <button className={styles.button} type="submit"></button>
      </form>
    </div>
  )
}

export default AddLink
