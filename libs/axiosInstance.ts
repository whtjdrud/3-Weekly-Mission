import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api',
  timeout: 5000,
})

export default axiosInstance
