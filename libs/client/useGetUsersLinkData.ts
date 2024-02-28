import axiosClient from '@/libs/axiosClient'

const useGetUsersLinkData = async (
  userId: string | undefined,
  folderId: string | string[] | undefined,
) => {
  const url = `/users/${userId}/links?folderId=${folderId}`

  try {
    const res = await axiosClient.get(url)
    return res.data.data
  } catch (error) {
    console.error('API 호출 중 에러 발생:', error)
  }
}

export default useGetUsersLinkData
