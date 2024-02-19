import Link from 'next/link'
import Image from 'next/image'
import styles from './signheader.module.css'
import { useRouter } from 'next/router'

const SignHeader = () => {
  const router = useRouter()

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
        {router.pathname === '/login' ? (
          <p className={styles.header_container__p}>
            회원이 아니신가요?
            <Link className={styles.header_container__a} href="/signup">
              회원 가입하기
            </Link>
          </p>
        ) : null}
        {router.pathname === '/signup' ? (
          <p className={styles.header_container__p}>
            이미 회원이신가요?
            <Link className={styles.header_container__a} href="/login">
              로그인 하기
            </Link>
          </p>
        ) : null}
      </div>
    </header>
  )
}

export default SignHeader
