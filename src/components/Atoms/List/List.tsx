import './List.style.less';

import type { ListProps as AntListProps } from 'antd';
import { List as AntList } from 'antd';
import React from 'react';

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
