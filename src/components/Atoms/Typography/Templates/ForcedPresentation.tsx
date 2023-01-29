import React from 'react';

interface ForcedPresentationProps {
  force?: 'optional' | 'required';
}

const ForcedPresentation = ({ force }: ForcedPresentationProps) => {
  return force === 'required' ? (
    <span className={`input-label--required `}>*</span>
  ) : (
    <span className={`input-label--optional `}>Optional</span>
  );
};

export default ForcedPresentation;
