import './IconText.less';

import React from 'react';

import { Icon,Typography } from '../../index';
import type { FontelloIcons } from '../../shared/shared-types';

interface IconTextProps {
  fontIcon: FontelloIcons | 'no-icon';
  value?: string | React.ReactNode;
  imgSrc?: string;
  imgWidth?: string | number;
  className?: string;
  url?: string;
  display?: 'stacked' | 'inline' | 'split';
}

const { Text, Link } = Typography;

const IconText = ({ fontIcon, value, className = '', url }: IconTextProps) => {
  return (
    <div className={`cc-icon-text  ${className}`}>
      {fontIcon === 'no-icon' ? (
        <span className="spacer" />
      ) : (
        <Icon fontIcon={fontIcon} className="icon-text--icon" />
      )}
      {url ? (
        <Link href={url} target="_blank">
          {value}
        </Link>
      ) : (
        <Text className="icon-text--value">{value}</Text>
      )}
    </div>
  );
};

export default IconText;
