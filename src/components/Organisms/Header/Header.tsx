import './Header.less';

import React from 'react';

import Me from '../../../assets/images/me.jpg';
import { contactButtonsData, profileInfo } from '../../../data/AppData';
import { Avatar, Icon,ProfileInfo, Slit } from '../../index';

const Header = () => {
  const { linkUrl, userName, role, msg } = profileInfo;
  return (
    <header className="app-header">
      <div className="app-header-wrapper">
        <Avatar
          className="profile-pic"
          size={200}
          src={Me}
          icon={<Icon fontIcon="awethentique-user" />}
        />
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
