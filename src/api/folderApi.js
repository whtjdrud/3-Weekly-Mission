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
  let url = '/users/1/links';

  if (activeFolderId) {
    url = `/users/1/links?folderId=${activeFolderId}`;
  }

  const response = await api.get(url);
  return response.data;
};
