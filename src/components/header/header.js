import React from 'react';
import Logo from '../../assets/images/index/logo.svg';
import useProfileState from '../../hooks/useProfileState';
import HeaderNavProfile from './headerNavProfile';
function Header() {
  const { profile } = useProfileState();

  return (
    <header>
      <nav>
        <a href="index.html">
          <img src={Logo} alt="홈으로 연결된 Linkbrary 로고" />
        </a>
        <HeaderNavProfile profile={profile} />
      </nav>
    </header>
  );
}

export default Header;
