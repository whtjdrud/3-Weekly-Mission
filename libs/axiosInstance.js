import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api',
  timeout: 5000,
})

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken =
      typeof window !== 'undefined'
        ? sessionStorage.getItem('accessToken')
        : null

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default axiosInstance
