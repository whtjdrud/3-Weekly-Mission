import axiosClient from '@/libs/axiosClient'

const useGetLinkData = async (folderId: string) => {
  const queryString = folderId === 'all' ? '' : `?folderId=${folderId}`

  try {
    const res = await axiosClient.get(`/links${queryString}`)
    return res.data.data.folder
  } catch (error) {
    console.error('API 호출 중 에러 발생:', error)
  }
}

export default useGetLinkData
