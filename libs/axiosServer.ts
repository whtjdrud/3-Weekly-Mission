import axios from 'axios'

const axiosServer = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api',
  timeout: 5000,
})

export default axiosServer
