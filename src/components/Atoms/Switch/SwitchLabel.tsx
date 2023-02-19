import React from 'react';

import { InputLabel } from '../../index';

interface SwitchLabelProps {
  forId?: string;
  testId?: string;
  labelClassName: string;
  className: string;
  label?: React.ReactNode;
  switchState: boolean | undefined;
  position: 'left' | 'right';
}

const SwitchLabel = ({
  forId,
  label,
  switchState,
  labelClassName,
  className,
  testId,
  position,
}: SwitchLabelProps) => {
  if (switchState) {
    return (
      <span
        data-testid={testId}
        className={`cc-switch__label ${labelClassName}`}
      >
        {label}
      </span>
    );
  }
  return (
    <InputLabel
      data-testid={testId}
      forId={forId}
      label={label}
      labelClassName={labelClassName}
      className={className}
    />
  );
};

export default SwitchLabel;
