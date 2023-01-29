import React from 'react';
import { Typography } from '../../../index';
import ForcedPresentation from './ForcedPresentation';

interface InputLabelTemplateProps {
  label: React.ReactNode;
  forId?: string;
  className?: string;
  labelClassName?: string;
  force?: 'optional' | 'required';
}

const InputLabel = ({
  label,
  forId,
  labelClassName = '',
  className = '',
  force,
}: InputLabelTemplateProps) => {
  if (typeof label === 'string') {
    return (
      <label className={labelClassName} htmlFor={forId}>
        <Typography.Text className={`input-label ${className}`}>
          {label}
          {force && <ForcedPresentation force={force} />}
        </Typography.Text>
      </label>
    );
  }
  return (
    <label
      className={`input-label ${className} ${labelClassName}`}
      htmlFor={forId}
    >
      {label}
      {force && <ForcedPresentation force={force} />}
    </label>
  );
};

export default InputLabel;
