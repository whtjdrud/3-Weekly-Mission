import { LoginForm } from '@/types/sign'
import axiosClient from '@/libs/axiosClient'

export const useLoginUser = async (data: LoginForm) => {
  const response = await axiosClient.post('/sign-in', data)
  const { accessToken, refreshToken } = response.data.data

  const expires = new Date()
  expires.setDate(expires.getDate() + 1)

  //localtest로 인해 HttpOnly; Secure는 삭제
  document.cookie = `accessToken=${accessToken}; Path=/; Expires=${expires.toUTCString()};`
  document.cookie = `refreshToken=${refreshToken}; Path=/; Expires=${expires.toUTCString()};`
  sessionStorage.setItem('accessToken', accessToken)
}
