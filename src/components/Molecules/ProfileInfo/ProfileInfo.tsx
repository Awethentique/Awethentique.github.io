import React from 'react';
import { Typography, IconButtonStrip, Card, Switch, Icon } from '../../index';
import type { ButtonData } from '../IconButtonStrip/IconButtonStrip';

import './ProfileInfo.less';

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
  const linkParts = linkUrl.split(' ');

  const toggleDark = (checked: boolean) => {
    if (checked) {
      document.body.className = 'theme-1';
    } else {
      document.body.className = 'theme-2';
    }
    console.log(`switch to ${checked}`);
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
          defaultChecked
          onChange={toggleDark}
          labelRight={<Icon fontIcon="awethentique-moon" />}
          labelLeft={<Icon fontIcon="awethentique-light-up" />}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
