import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api',
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
