import Link from 'next/link'
import Image from 'next/image'
import styles from './signheader.module.css'
const SignHeader = () => {
  return (
    <header>
      <div className={styles.header_container}>
        <Link href="/">
          <Image
            src="/images/linkbrary.svg"
            alt="홈으로 연결된 Linkbrary 로고"
            width={210}
            height={38}
          />
        </Link>
        <p className={styles.header_container__p}>
          회원이 아니신가요?
          <Link className={styles.header_container__a} href="/signup">
            회원 가입하기
          </Link>
        </p>
      </div>
    </header>
  )
}

export default SignHeader
