import React from 'react';
import PropTypes from 'prop-types';

const Header_nav_profile = ({ profile }) => {
  if (profile) {
    return (
      <div className="login-profile">
        <img className="nav-profile-img" src={profile.profileImageSource} alt="" />
        <a className="" href="/pages/logout">
          <span>{profile.email}</span>
        </a>
      </div>
    );
  }
  return (
    <div className="login-profile">
      <a className="cta cta-short" href="/pages/login/signin.html">
        <span>로그인</span>
      </a>
    </div>
  );
};

Header_nav_profile.propTypes = {
  profile: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    email: PropTypes.string,
    profileImageSource: PropTypes.string,
  }),
};

export default Header_nav_profile;
