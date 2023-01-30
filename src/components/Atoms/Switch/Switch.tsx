import React from 'react';
import { Switch as AntSwitch } from 'antd';
import SwitchLabel from './SwitchLabel';
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
  defaultChecked,
  onChange,
  labelRight,
  labelLeft,
  ...props
}: SwitchProps) => {
  return (
    <div data-testid={testId} className={`cc-switch ${className}`}>
      {labelLeft && (
        <SwitchLabel
          forId={id}
          label={labelLeft}
          position="left"
          switchState={!defaultChecked}
          labelClassName={`left ${!defaultChecked ? 'is-selected' : ''}`}
          className="cc-switch__label"
        />
      )}
      <AntSwitch
        id={id}
        defaultChecked={defaultChecked}
        onChange={onChange}
        {...props}
      />
      {labelRight && (
        <SwitchLabel
          forId={id}
          label={labelRight}
          position="right"
          switchState={defaultChecked}
          labelClassName={`right ${defaultChecked ? 'is-selected' : ''}`}
          className="cc-switch__label"
        />
      )}
    </div>
  );
};

export default Switch;
