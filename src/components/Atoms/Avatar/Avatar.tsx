import './Avatar.less';

import type { AvatarProps as AntAvatarProps } from 'antd';
import { Avatar as AntAvatar } from 'antd';
import React from 'react';

interface AvatarProps extends AntAvatarProps {
  testId?: string;
  className?: string;
}

const Avatar = ({
  testId = 'avatar-component',
  className = '',
  ...props
}: AvatarProps) => {
  return (
    <AntAvatar
      data-testid={testId}
      className={`cc-avatar ${className}`}
      {...props}
    />
  );
};

export default Avatar;
