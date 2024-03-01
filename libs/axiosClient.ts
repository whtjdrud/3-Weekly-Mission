import axios from 'axios'
import { API_URL } from '@/constants/constant'

const axiosClient = axios.create({
  baseURL: API_URL,
  timeout: 5000,
})

axiosClient.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem('accessToken')

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default axiosClient
