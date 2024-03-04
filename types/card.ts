export interface CardProps {
  url: string
  imageSource: string
  alt: string
  description: string
  createdAt: string
  onDeleteClick: () => void
  onAddToFolderClick: () => void
}

export interface Link {
  id: string
  favorite: boolean
  created_at: string
  url: string
  title: string
  image_source: string
  description: string
}
