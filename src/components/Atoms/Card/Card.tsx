import React from 'react';
import { Card as AntCard } from 'antd';
import type { CardProps as AntCardProps } from 'antd';

import './Card.style.less';

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
