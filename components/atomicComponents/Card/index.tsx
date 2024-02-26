import React, { MouseEventHandler, useRef, useState } from 'react'
import { CardContent } from '@/components/atomicComponents/CardContent'
import styles from './card.module.css'
import { convertDate, timeSince } from '@/utils/dateUtils'

type CardProps = {
  url: string
  image_source: string
  alt: string
  description: string
  created_at: string
  onDeleteClick: () => void
  onAddToFolderClick: () => void
}

export const Card = ({
  url,
  image_source,
  alt,
  description,
  created_at,
  onDeleteClick,
  onAddToFolderClick,
}: CardProps) => {
  const DEFAULT_IMAGE = '/images/card-default.png'
  const kebabButtonRef = useRef<HTMLButtonElement>(null)
  const popoverRef = useRef<HTMLDivElement>(null)
  const [isPopoverOpen, setPopoverOpen] = useState(false)

  const togglePopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPopoverOpen(!isPopoverOpen)
  }

  const handleDeleteClick: MouseEventHandler<HTMLLIElement> = (event) => {
    event.preventDefault()
    onDeleteClick()
    setPopoverOpen(false)
  }

  const handleAddToFolderClick: MouseEventHandler<HTMLLIElement> = (event) => {
    event.preventDefault()
    onAddToFolderClick()
    setPopoverOpen(false)
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className={styles.container}>
        <img
          src={image_source || DEFAULT_IMAGE}
          className={styles.cardImage}
          alt={alt}
        />
        <CardContent
          elapsedTime={timeSince(created_at)}
          description={description}
          createdAt={convertDate(created_at)}
        />
        <button
          className={styles.star}
          onClick={(event) => {
            event.preventDefault()
          }}
        >
          <img src="/images/star.svg" alt="즐겨찾기를 나타내는 별" />
        </button>
        <button
          ref={kebabButtonRef}
          className={styles.kebab}
          onClick={(event) => {
            event.preventDefault()
            togglePopover(event)
          }}
        >
          <img src="/images/kebab.svg" alt="더보기를 나타내는 점 3개" />
          {isPopoverOpen && (
            <div ref={popoverRef} className={styles.popover}>
              <ul className={styles.popoverList}>
                <li onClick={handleDeleteClick}>삭제하기</li>
                <li onClick={handleAddToFolderClick}>폴더에 추가</li>
              </ul>
            </div>
          )}
        </button>
      </div>
    </a>
  )
}
