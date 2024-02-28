import axios from 'axios'
import axiosClient from '@/libs/axiosClient'

export const useCheckDuplicateEmail = async (email: string) => {
  try {
    await axiosClient.post('/check-email', {
      email,
    })
    return true
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        status: error.response.status,
        message: error.response.data.message,
      }
    }

    return { status: 'Network Error', message: '네트워크 오류가 발생했습니다.' }
  }
}
