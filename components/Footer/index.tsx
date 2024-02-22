import styles from './footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.items}>
        <span className={styles.copyright}>&copy;codeit - 2024</span>
        <div className={styles.links}>
          <Link className={styles.link} href="/#">
            privacyPolicy
          </Link>
          <Link className={styles.link} href="/#">
            faq
          </Link>
        </div>
        <div className={styles.sns}>
          <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <Image src="/images/facebook.svg" alt="facebook 홈페이지로 연결된 facebook 로고" height={18} width={18} />
          </Link>
          <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <Image src="/images/twitter.svg" alt="twitter 홈페이지로 연결된 twitter 로고" height={18} width={18} />
          </Link>
          <Link href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <Image src="/images/youtube.svg" alt="youtube 홈페이지로 연결된 youtube 로고" height={18} width={18} />
          </Link>
          <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/instagram.svg"
              alt="instagram 홈페이지로 연결된 instagram 로고"
              height={18}
              width={18}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
