import axiosClient from '@/libs/axiosClient'

export const useGetFolders = async () => {
  try {
    const user = await axiosClient.get('/users')
    const userId = user.data[0].id

    const response = await axiosClient.get(`users/${userId}/folders`)
    const folders = response.data

    return folders.map(
      (folder: {
        id: string
        created_at: string
        favorite: boolean
        name: string
        user_id: string
        link_count: number
      }) => {
        const { id, created_at, favorite, name, user_id, link_count } = folder

        return {
          id,
          createdAt: created_at,
          name,
          userId: user_id,
          linkCount: link_count,
        }
      },
    )
  } catch (error) {
    console.error('Error fetching folders:', error)
    throw error
  }
}
