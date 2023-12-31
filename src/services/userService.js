import api from '../utils/api';

export const getUserProfile = async () => {
  const response = await api.get('/sample/user');
  return response.data;
};
