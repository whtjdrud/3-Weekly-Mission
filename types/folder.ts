import React from 'react'

export interface Folder {
  id: string
  createdAt: string
  name: string
  userId: number
  linkCount: number
}

export type FolderProps = {
  shareLink: string
  folders: Folder[]
}
export interface FolderBarProps {
  folders: Folder[]
  selectedFolderId: string
  onFolderClick: React.Dispatch<React.SetStateAction<string>>
  shareLink: string
}

export type shareProps = {
  folderName: string
  ownerName: string
  image_source: string
  links: {
    id: string
    title: string
    url: string
    image_source: string
    alt: string
    description: string
    elapsedTime: string
    created_at: string
  }[]
}

export type CardListProps = {
  links: {
    id: string
    title: string
    url: string
    image_source: string
    alt: string
    description: string
    elapsedTime: string
    created_at: string
  }[]
}
