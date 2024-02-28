import axiosClient from '@/libs/axiosClient'
import { FolderRawData } from '@/types/folder'

export const useGetFolders = async () => {
  try {
    const response = await axiosClient.get<{ data: FolderRawData[] }>(
      'users/25/folders',
    )
    const folders = response?.data.data

    return folders.map((folder) => {
      const { id, created_at, name, user_id, link } = folder

      return {
        id,
        createdAt: created_at,
        name,
        userId: user_id,
        linkCount: link.count,
      }
    })
  } catch (error) {
    console.error('Error fetching folders:', error)
    throw error
  }
}
