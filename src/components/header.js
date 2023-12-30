import React from 'react';
import Logo from '../assets/images/index/logo.svg';
import useProfileState from './useProfileState';
function Header() {
  const { profile } = useProfileState();

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
