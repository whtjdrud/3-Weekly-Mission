import React from 'react';
import Logo from '../assets/images/index/logo.svg';
import codeit from '../assets/images/index/white.svg';

function Header() {
  return (
    <header>
      <nav>
        <a href="index.html">
          <img src={Logo} alt="홈으로 연결된 Linkbrary 로고" />
        </a>
        <a className="cta cta-short" href="/pages/login/signin.html">
          <span>로그인</span>
        </a>
      </nav>
      <div className="hero-header">
        <div className="header-image">
          <img className="hero-header-img" src={codeit} alt="" />
          <p>@코드잇</p>
        </div>
        <h1 className="slogan">⭐️ 즐겨찾기</h1>
      </div>
    </header>
  );
}

export default Header;
