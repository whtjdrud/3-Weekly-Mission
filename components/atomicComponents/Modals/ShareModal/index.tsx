import styles from './shareModal.module.css'
import { FC, MouseEventHandler } from 'react'
import Modal from '@/components/atomicComponents/Modals/modal'

type ShareModalProps = {
  isOpen: boolean
  folderName: string
  onKakaoClick: MouseEventHandler<HTMLButtonElement>
  onFacebookClick: MouseEventHandler<HTMLButtonElement>
  onLinkCopyClick: MouseEventHandler<HTMLButtonElement>
  onCloseClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement>
}

const ShareModal: FC<ShareModalProps> = ({
  isOpen,
  folderName,
  onKakaoClick,
  onFacebookClick,
  onLinkCopyClick,
  onCloseClick,
}) => {
  if (!isOpen) return null

  return (
    <Modal onCloseClick={onCloseClick}>
      <div className={styles.items}>
        <h2 className={styles.title}>폴더 공유</h2>
        <p className={styles.description}>{folderName}</p>
        <div className={styles.modalContent}>
          <button className={styles.button} onClick={onKakaoClick}>
            <img src="/images/modal/kakao.svg" alt="Kakao Icon" />
            <span>카카오톡</span>
          </button>
          <button className={styles.button} onClick={onFacebookClick}>
            <img src="/images/modal/facebook.svg" alt="Facebook Icon" />
            <span>페이스북</span>
          </button>
          <button className={styles.button} onClick={onLinkCopyClick}>
            <img src="/images/modal/link.svg" alt="Link Icon" />
            <span>링크 복사</span>
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default ShareModal
