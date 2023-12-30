import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api',
});

export default api;
