import React from 'react';
import { Slit, Avatar, ProfileInfo } from '../../index';
import Me from '../../../assets/images/me.jpg';
// import HeaderBg from '../../../assets/images/header-bg.png';
import { contactButtonsData, profileInfo } from '../../../data/AppData';
import './Header.less';

const Header = () => {
  const { linkUrl, userName, role, msg } = profileInfo;
  return (
    <header className="app-header">
      <div className="app-header-wrapper">
        <Avatar className="profile-pic" size={200} src={Me} />
        <ProfileInfo
          linkUrl={linkUrl}
          userName={userName}
          role={role}
          msg={msg}
          buttonData={contactButtonsData}
        />
      </div>
      <div className="header-bg-img" />
      <Slit />
    </header>
  );
};

export default Header;
