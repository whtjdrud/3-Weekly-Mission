import styles from './folderbar.module.css'
import FolderButton from '@/components/atomicComponents/FolderButton'
import React, { useState } from 'react'
import Image from 'next/image'
import { BUTTONS, MODALS_ID } from '@/components/FolderBar/constants'
import InputModal from '@/components/atomicComponents/Modals/InputModal'
import DeleteModal from '@/components/atomicComponents/Modals/DeleteModal'
import ShareModal from '@/components/atomicComponents/Modals/ShareModal'

interface FolderBarProps {
  folders: {
    folder: {
      id: string
      name: string
    }[]
  }
  selectedFolderId: String
  onFolderClick: React.Dispatch<React.SetStateAction<string>>
  openModal: (modalId: string) => void
}
const FolderBar: React.FC<FolderBarProps> = ({
  folders,
  selectedFolderId,
  onFolderClick,
}) => {
  const folderName =
    'all' === selectedFolderId
      ? '전체'
      : folders.folder?.find(({ id }) => id === selectedFolderId)?.name ?? ''
  const [currentModal, setCurrentModal] = useState<string | null>(null)
  const [inputValue, setInputValue] = useState<string>('')
  const closeModal = () => setCurrentModal(null)
  const handleKakaoClick = () => {}
  const handleFacebookClick = () => {}

  const handleLinkCopyClick = () => {}

  return (
    <div className={styles.container}>
      <div className={styles.folders}>
        <FolderButton
          key="all"
          text="전체"
          onClick={(id) => onFolderClick('all')}
          isSelected={'all' === selectedFolderId}
        />
        {folders.folder?.map(({ id, name }) => (
          <FolderButton
            key={id}
            text={name}
            onClick={() => onFolderClick(id)}
            isSelected={id === selectedFolderId}
          />
        ))}
      </div>
      <div
        className={styles.addButton}
        onClick={() => setCurrentModal(MODALS_ID.addFolder)}
      >
        <span>폴더 추가</span>
        <Image
          src="/images/add.svg"
          height={16}
          width={16}
          alt="폴더추가 버튼"
        />
      </div>
      <div className={styles.folderName}>
        <h2>{folderName}</h2>
      </div>

      {/*전체 폴더 클릭할때 버튼 비공개*/}
      {selectedFolderId !== 'all' && (
        <div className={styles.buttons}>
          {BUTTONS.map(({ text, iconSource, modalId }) => (
            <button
              key={modalId}
              className={styles.buttons_container}
              onClick={() => setCurrentModal(modalId)}
            >
              <Image
                src={iconSource}
                alt={`${text} 아이콘`}
                width={18}
                height={18}
              />
              <span className={styles.buttons_container_text}>{text}</span>
            </button>
          ))}

          <InputModal
            isOpen={currentModal === MODALS_ID.addFolder}
            title="폴더 추가"
            placeholder="내용 입력"
            buttonText="추가하기"
            onCloseClick={closeModal}
            value={inputValue}
            themeColor="blue"
            onChange={(event) => setInputValue(event.target.value)}
          />

          <InputModal
            isOpen={currentModal === MODALS_ID.rename}
            title="폴더 이름 변경"
            placeholder="내용 입력"
            buttonText="변경하기"
            onCloseClick={closeModal}
            themeColor="blue"
            value={folderName}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <DeleteModal
            isOpen={currentModal === MODALS_ID.delete}
            title="폴더 삭제"
            description={folderName}
            buttonText="삭제하기"
            onCloseClick={closeModal}
            themeColor="red"
          />
          <ShareModal
            isOpen={currentModal === MODALS_ID.share}
            folderName={folderName}
            onKakaoClick={handleKakaoClick}
            onFacebookClick={handleFacebookClick}
            onLinkCopyClick={handleLinkCopyClick}
            onCloseClick={closeModal}
          />
        </div>
      )}
    </div>
  )
}

export default FolderBar
