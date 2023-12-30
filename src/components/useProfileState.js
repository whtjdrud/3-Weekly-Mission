import { useEffect, useState } from 'react';
import { getUserProfile } from '../services/userService';

function useProfileState() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserProfile();
        setProfile(data);
      } catch (error) {
        console.error('프로필 데이터를 불러오는데 실패했습니다', error);
      }
    };

    fetchData();
  }, []);

  return { profile };
}

export default useProfileState;
