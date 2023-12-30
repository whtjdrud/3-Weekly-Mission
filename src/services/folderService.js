import api from './api';

export const getFolderData = async () => {
  const response = await api.get('/sample/folder');
  return response.data;
};
