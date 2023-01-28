import React from 'react';
import { List as AntList } from 'antd';
import type { ListProps as AntListProps } from 'antd';

import './List.style.less';

interface ListProps<T> extends AntListProps<T> {
  testId?: string;
  className?: string;
}

const { Item } = AntList;

const List = ({
  children,
  className = '',
  testId = 'list-component',
  ...props
}: ListProps<any>) => {
  return (
    <AntList data-testid={testId} className={`cc-list ${className}`} {...props}>
      {children}
    </AntList>
  );
};

List.Item = Item;

export default List;
