import api from '../utils/api';

export const getSampleFolderData = async () => {
  const response = await api.get('/sample/folder');
  return response.data;
};

export const getUserFolderData = async () => {
  const response = await api.get('/users/1/folders');
  return response.data;
};

export const getUserLinkData = async activeFolderId => {
  let queryParams = {};

  if (activeFolderId) {
    queryParams['folderId'] = activeFolderId;
  }
  const response = await api.get('/users/1/links', { params: queryParams });
  return response.data;
};
