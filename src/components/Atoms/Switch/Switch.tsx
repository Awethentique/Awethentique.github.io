import React from 'react';
import { Switch as AntSwitch } from 'antd';
import { InputLabel } from '../../index';
import { SwitchProps as AntSwitchProps } from 'antd';
import './Switch.less';

interface SwitchProps extends AntSwitchProps {
  id?: string;
  testId?: string;
  labelRight?: React.ReactNode;
  labelLeft?: React.ReactNode;
}

const Switch = ({
  id = 'cc-switch',
  className = '',
  testId = 'switch-component',
  labelRight,
  labelLeft,
  ...props
}: SwitchProps) => {
  return (
    <div data-testid={testId} className={`cc-switch ${className}`}>
      {labelLeft && (
        <InputLabel
          forId={id}
          label={labelLeft}
          labelClassName="cc-switch__with-label left"
          className="cc-switch__label"
        />
      )}
      <AntSwitch id={id} {...props} />
      {labelRight && (
        <InputLabel
          forId={id}
          label={labelRight}
          labelClassName="cc-switch__with-label right"
          className="cc-switch__label"
        />
      )}
    </div>
  );
};

export default Switch;
