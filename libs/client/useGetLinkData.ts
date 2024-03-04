import axiosClient from '@/libs/axiosClient'
import { Link } from '@/types/card'

const useGetLinkData = async (folderId: string) => {
  const url = folderId === 'all' ? '/links' : `/folders/${folderId}/links`

  try {
    const res = await axiosClient.get(url)
    const links = res.data

    return links.map((link: Link) => {
      const {
        id,
        favorite,
        created_at,
        url,
        title,
        image_source,
        description,
      } = link

      return {
        id: id,
        favorite: favorite,
        createdAt: created_at,
        url: url,
        title: title,
        imageSource: image_source,
        description: description,
      }
    })
  } catch (error) {
    console.error('API 호출 중 에러 발생:', error)
  }
}

export default useGetLinkData
