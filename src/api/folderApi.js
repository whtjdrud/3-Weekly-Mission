import api from '../utils/api';

export const getFolderData = async () => {
  const response = await api.get('/sample/folder');
  return response.data;
};
