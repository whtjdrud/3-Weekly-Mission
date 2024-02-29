type FolderType = {
  id: string
  name: string
}

export type FolderProps = {
  shareLink: string
  folders: {
    folder: FolderType[]
  }
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

export type FolderRawData = {
  id: string
  created_at: string
  name: string
  user_id: number
  link: {
    count: number
  }
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
export interface Folder {
  id: string
  createdAt: string
  name: string
  userId: number
  linkCount: number
}
