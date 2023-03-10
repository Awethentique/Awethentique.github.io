import './Popover.style.less';

import type { PopoverProps as AntPopoverProps } from 'antd';
import { Popover as AntPopover } from 'antd';
import React from 'react';

export interface PopoverProps extends AntPopoverProps {
  className?: string;
  testId?: string;
}

const Popover = ({
  className = '',
  placement,
  zIndex = 200,
  testId = 'cc-popover',
  children,
  ...props
}: PopoverProps) => {
  return (
    <AntPopover
      data-testid={testId}
      placement={placement}
      overlayClassName={`cc-popover ${className}`}
      zIndex={zIndex}
      {...props}
    >
      {children}
    </AntPopover>
  );
};

export default Popover;
