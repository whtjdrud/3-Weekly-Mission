import { ChangeEventHandler, MouseEventHandler, ReactNode } from 'react'

export interface AddLinkToFolderProps {
  folders: {
    id: string
    createdAt: string
    name: string
    userId: number
    linkCount: number
  }[]
  isOpen: boolean
  description: string
  onCloseClick: () => void
  themeColor: string
  buttonText: string
  selectedFolderId: string
  setSelectedFolderId: (id: string) => void
}
export interface ShareModalProps {
  isOpen: boolean
  folderName: string
  onKakaoClick: MouseEventHandler<HTMLButtonElement>
  shareLink: string
  onLinkCopyClick: MouseEventHandler<HTMLButtonElement>
  onCloseClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement>
}
export interface DeleteModalProps {
  title: string
  buttonText: string
  isOpen: boolean
  themeColor: string
  description: string
  onCloseClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement>
}
export interface InputModalProps {
  title: string
  placeholder: string
  buttonText: string
  isOpen: boolean
  value: string
  themeColor: string
  onChange: ChangeEventHandler<HTMLInputElement>
  onCloseClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement>
}
export interface ModalProps {
  children: ReactNode
  onCloseClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement>
  themeColor?: string
  buttonText?: string
}
