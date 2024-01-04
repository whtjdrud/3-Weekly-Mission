import React from 'react';
import Logo from '../../assets/images/index/logo.svg';
import useProfileState from '../../hooks/useProfileState';
import HeaderNavProfile from './headerNavProfile';
import './header.css';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const { profile } = useProfileState();
  const location = useLocation();
  const isFolder = location.pathname === '/folder';

  return (
    <header>
      <nav className={`header_nav ${isFolder ? '' : 'isPositionFixed'}`}>
        <Link to="/">
          <img src={Logo} alt="홈으로 연결된 Linkbrary 로고" />
        </Link>
        <HeaderNavProfile profile={profile} />
      </nav>
    </header>
  );
}

export default Header;
