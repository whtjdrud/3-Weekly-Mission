import axiosClient from '@/libs/axiosClient'
import { FolderRaw } from '@/types/folder'

export const useGetFolders = async () => {
  try {
    const user = await axiosClient.get('/users')
    const userId = user.data[0].id
    const response = await axiosClient.get(`users/${userId}/folders`)
    const folders = response.data

    return folders.map((folder: FolderRaw) => {
      const { id, created_at, name, user_id, link_count } = folder

      return {
        id,
        createdAt: created_at,
        name,
        userId: user_id,
        linkCount: link_count,
      }
    })
  } catch (error) {
    console.error('Error fetching folders:', error)
    throw error
  }
}
