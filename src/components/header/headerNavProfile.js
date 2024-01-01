import React from 'react';
import PropTypes from 'prop-types';

const HeaderNavProfile = ({ profile }) => {
  if (profile) {
    return (
      <div className="login-profile">
        <img className="nav-profile-img" src={profile.profileImageSource} alt="" />
        <a className="" href="/pages/logout">
          {profile.email}
        </a>
      </div>
    );
  }
  return (
    <div className="login-profile">
      <a className="cta cta-short" href="/pages/login/signin.html">
        로그인
      </a>
    </div>
  );
};

HeaderNavProfile.propTypes = {
  profile: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    email: PropTypes.string,
    profileImageSource: PropTypes.string,
  }),
};

export default HeaderNavProfile;
