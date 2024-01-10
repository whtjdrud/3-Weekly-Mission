import { useState, useEffect } from 'react';
import { getUserFolderData, getSampleFolderData, getUserLinkData } from '../api/folderApi';

export const useSampleFolderData = () => {
  const [folderData, setFolderData] = useState({
    folder: {
      links: [],
      owner: {
        profileImageSource: '',
        name: '',
      },
      name: '',
    },
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSampleFolderData();
        setFolderData(data);
      } catch (error) {
        setError(error);
        console.error('폴더 데이터를 불러오는데 실패했습니다', error);
      }
    };

    fetchData();
  }, []);

  return { folderData, error };
};

export const useUserFolders = () => {
  const [folderList, setFolderList] = useState({ data: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserFolderData();
        setFolderList(data);
      } catch (error) {
        console.error('폴더 데이터를 불러오는데 실패했습니다', error);
      }
    };

    fetchData();
  }, []);

  return { folderList };
};

export const useUserLinkData = activeFolderId => {
  const [linkList, setLinkList] = useState({ data: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserLinkData(activeFolderId);
        setLinkList(data);
      } catch (error) {
        console.error('링크 데이터를 불러오는데 실패했습니다', error);
      }
    };

    fetchData();
  }, [activeFolderId]);

  return { linkList };
};
