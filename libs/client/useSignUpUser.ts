import axios from 'axios'
import { LoginForm } from '@/types/sign'

export const useSignUpUser = async (data: LoginForm) => {
  try {
    const response = await axios.post(
      'https://bootcamp-api.codeit.kr/api/sign-up',
      data,
    )
    const { accessToken, refreshToken } = response.data.data

    const expires = new Date()
    expires.setDate(expires.getDate() + 1)

    //localtest로 인해 HttpOnly; Secure는 삭제
    document.cookie = `access_token=${accessToken}; Path=/; Expires=${expires.toUTCString()};`
    document.cookie = `refresh_token=${refreshToken}; Path=/; Expires=${expires.toUTCString()};`
    sessionStorage.setItem('accessToken', accessToken)
  } catch (error) {
    console.log(error)
  }
}
