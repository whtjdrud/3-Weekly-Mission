import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../services/userService';
import Logo from '../assets/images/index/logo.svg';

function Header() {
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

  // 로그인 상태에 따른 링크와 텍스트를 결정하는 함수
  const renderAuthLink = () => {
    if (profile) {
      return (
        <div className="login-profile">
          <img className="nav-profile-img" src={profile.profileImageSource} alt="" />
          <a className="" href="/pages/logout">
            <span>{profile.email}</span>
          </a>
        </div>
      );
    } else {
      return (
        <div className="login-profile">
          <a className="cta cta-short" href="/pages/login/signin.html">
            <span>로그인</span>
          </a>
        </div>
      );
    }
  };

  return (
    <header>
      <nav>
        <a href="index.html">
          <img src={Logo} alt="홈으로 연결된 Linkbrary 로고" />
        </a>
        {renderAuthLink()}
      </nav>
    </header>
  );
}

export default Header;
