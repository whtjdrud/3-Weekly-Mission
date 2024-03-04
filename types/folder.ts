import React, { MouseEventHandler } from 'react'
import { User } from '@/types/user'

export interface Folder {
  id: string
  createdAt: string
  name: string
  userId: number
  linkCount: number
}
export interface FolderRaw {
  id: string
  created_at: string
  favorite: boolean
  name: string
  user_id: string
  link_count: number
}

export interface FolderProps {
  user: User
  shareLink: string
  folders: Folder[]
}

export interface FolderButtonProps {
  text: string
  onClick: MouseEventHandler<HTMLButtonElement>
  isSelected?: boolean
}

export interface FolderInfoProps {
  profileImage: string
  ownerName: string
  folderName: string
}
export interface FolderBarProps {
  folders: Folder[]
  selectedFolderId: string
  onFolderClick: React.Dispatch<React.SetStateAction<string>>
  shareLink: string
}

export interface ShareProps {
  user: User
  links: Links[]
  folderName: string
}
export interface FolderItemProps {
  folderName: string
  linkCount: number
  isSelected?: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
}

export interface Links {
  id: string
  title: string
  url: string
  imageSource: string
  alt: string
  description: string
  elapsedTime: string
  createdAt: string
}
