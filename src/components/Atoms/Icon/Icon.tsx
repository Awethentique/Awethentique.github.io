import './Icon.less';

import React from 'react';

import { Popover } from '../../index';
import type { FontelloIcons,IconSizes } from '../../shared/shared-types';
interface CommonIconProps {
  testId?: string;
  style?: React.CSSProperties;
  size?: IconSizes | string | number;
  spin?: boolean;
  popOverTitle?: React.ReactNode;
  popOverContent?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

type ConditionalIconProps =
  | {
      fontIcon: FontelloIcons | string;
    }
  | {
      fontIcon?: null;
    };

type IconProps = CommonIconProps & ConditionalIconProps;

const Icon = ({
  testId = 'cc-icon',
  fontIcon = null,
  size = 1,
  spin = false,
  popOverTitle,
  popOverContent,
  onClick,
  style,
  className = '',
  ...props
}: IconProps) => {
  const onClickClass = onClick ? 'clickable' : '';
  let fontIconSize = '';

  if (typeof size !== 'string' || typeof size !== 'number') {
    fontIconSize = `fontello-icon__size-${size === 1 ? 'default' : size}`;
  }

  const classNames = `cc-icon fontello-icon ${fontIcon} ${fontIconSize} ${
    className || ''
  } ${popOverTitle || popOverContent ? 'icon-has-hover'      :      ''} ${
    spin ? 'icon-spin' : ''
  }${onClickClass}`;

  const icon = (
    <i
      className={classNames}
      style={style}
      data-testid={testId}
      onClick={onClick}
    />
  );

  if (popOverTitle || popOverContent) {
    return (
      <Popover title={popOverTitle} content={popOverContent}>
        {icon}
      </Popover>
    );
  }
  return icon;
};

export default Icon;
