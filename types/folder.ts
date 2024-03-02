import React from 'react'
import { User } from '@/types/user'

export interface Folder {
  id: string
  createdAt: string
  name: string
  userId: number
  linkCount: number
}

export type FolderProps = {
  user: User
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
  user: User
  links: Links[]
  folderName: string
}

export type Links = {
  id: string
  title: string
  url: string
  image_source: string
  alt: string
  description: string
  elapsedTime: string
  created_at: string
}
