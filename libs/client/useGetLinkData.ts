import axiosClient from '@/libs/axiosClient'

const useGetLinkData = async (folderId: string) => {
  const url = folderId === 'all' ? '/links' : `/folders/${folderId}/links`

  try {
    const res = await axiosClient.get(url)
    return res.data
  } catch (error) {
    console.error('API 호출 중 에러 발생:', error)
  }
}

export default useGetLinkData
