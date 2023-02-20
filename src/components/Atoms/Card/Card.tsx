import './Card.style.less';

import type { CardProps as AntCardProps } from 'antd';
import { Card as AntCard } from 'antd';
import React from 'react';

interface CardProps extends AntCardProps {
  testId?: string;
}

const { Meta } = AntCard;
const { Grid } = AntCard;

const Card = ({
  children,
  bordered = false,
  testId = 'card-component',
  className = '',
  ...props
}: CardProps) => {
  return (
    <AntCard
      bordered={bordered}
      data-testid={testId}
      className={`cc-card ${className}`}
      {...props}
    >
      {children}
    </AntCard>
  );
};

Card.Meta = Meta;
Card.Grid = Grid;

export default Card;
