import React from 'react';
import { Slit, Avatar, ContactInfo } from '../../index';
import Me from '../../../assets/images/me.jpg';
import HeaderBg from '../../../assets/images/header-bg.png';
import './Header.less';


const Header = () => {
  return (
    <header className="app-header">
      <div className="app-header-wrapper">
        <Avatar className="profile-pic" size={200} src={Me} />
        <ContactInfo
          linkUrl="https: //awethentique.github.io /projects"
          userName="Ritesh Makan"
          role="Ui/Ux Engineer/Architect"
          msg="Passionate about user experience!"
        />
      </div>
      <img className="header-bg-img" alt="header background" src={HeaderBg} />
      <Slit />
    </header>
  );
};

export default Header;
