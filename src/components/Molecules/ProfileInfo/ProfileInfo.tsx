import './ProfileInfo.less';

import React, { useEffect } from 'react';

import { Card, Icon,IconButtonStrip, Switch, Typography } from '../../index';
import { useLocalStorage } from '../../shared/local-storage';
import type { ButtonData } from '../IconButtonStrip/IconButtonStrip';

interface ProfileInfoProps {
  linkUrl: string;
  userName: string;
  role: string;
  msg: string;
  className?: string;
  buttonData?: ButtonData[];
}

const { Text } = Typography;

const ProfileInfo = ({
  linkUrl,
  userName,
  role,
  msg,
  className = '',
  buttonData,
}: ProfileInfoProps) => {
  const [theme, setTheme] = useLocalStorage('theme', 'theme-1');

  const linkParts = linkUrl.split(' ');

  useEffect(() => {
    // storing input name
    localStorage.setItem('theme', JSON.stringify(theme));
    document.body.className = theme;
  }, [theme]);

  const toggleDark = (checked: boolean) => {
    if (checked) {
      document.body.className = 'theme-1';
      setTheme('theme-1');
    } else {
      document.body.className = 'theme-2';
      setTheme('theme-2');
    }
  };

  return (
    <div className={`cc-contact-info  ${className}`}>
      <Card>
        <Text className="link-parts-0">{linkParts[0]}</Text>
        <Text className="link-parts-1">{linkParts[1]}</Text>
        <Text
          className="link-parts-2"
          copyable={{ text: `${linkParts[0]}${linkParts[1]}` }}
        >
          {linkParts[2]}
        </Text>
        <p>
          <Text className="user-name-label">User:</Text>
          <Text className="user-name">{userName}</Text>
          <br />
          <Text className="role-label">Role:</Text>
          <Text className="role">{role}</Text>
        </p>
        <Text className="msg-label">WARNING:</Text>
        <Text className="msg">{msg}</Text>
      </Card>
      <div className="actionable-items">
        <IconButtonStrip data={buttonData} />
        <Switch
          defaultChecked={theme === 'theme-1'}
          onChange={toggleDark}
          labelRight={<Icon fontIcon="awethentique-moon" />}
          labelLeft={<Icon fontIcon="awethentique-light-up" />}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
