import axiosInstance from '@/libs/axiosInstance'

type FolderRawData = {
  id: number
  created_at: string
  name: string
  user_id: number
  link: {
    count: number
  }
}

export const useGetFolders = async () => {
  try {
    const response = await axiosInstance.get<{ data: FolderRawData[] }>(
      'users/25/folders',
    )
    const rawfolders = response?.data.data

    const folders = rawfolders.map((folder) => {
      const { id, created_at, name, user_id, link } = folder

      return {
        id,
        createdAt: created_at,
        name,
        userId: user_id,
        linkCount: link.count,
      }
    })

    return folders
  } catch (error) {
    console.error('Error fetching folders:', error)
    throw error
  }
}
