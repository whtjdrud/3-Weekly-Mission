import Link from 'next/link'
import Image from 'next/image'
import styles from '@/components/Header/header.module.css'
import Profile from '@/components/atomicComponents/Profile'
import { useAuth } from '@/contexts/AuthProvider'

export async function getServerSideProps() {
  const { user } = useAuth(true)
  const email: string | undefined = user?.email
  const imageSource: string | undefined = user?.image_source

  return {
    props: {
      email,
      imageSource,
    },
  }
}

const HeaderPage = () => {
  const { user } = useAuth(true)

  const email: string | undefined = user?.email
  const imageSource: string | undefined = user?.image_source

  return (
    <header className={styles.header}>
      <nav className={styles.header_nav}>
        <Link href="/">
          <Image
            src="/images/linkbrary.svg"
            alt="홈으로 연결된 Linkbrary 로고"
            width={133}
            height={24}
          />
        </Link>
        {email && imageSource ? (
          <Profile email={email} imageSource={imageSource} />
        ) : (
          <div className={styles.loginProfile}>
            <Link className={`${styles.cta} ${styles.ctaShort}`} href="/login">
              로그인
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default HeaderPage
