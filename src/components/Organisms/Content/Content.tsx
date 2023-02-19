import './Content.less';

import React from 'react';

import { contentInfo } from '../../../data/AppData';
import { List,ProjectCard } from '../../index';

const Content = () => {
  return (
    <main className="app-content">
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 3,
          xl: 3,
          xxl: 4,
        }}
        dataSource={contentInfo}
        renderItem={(item) => (
          <List.Item>
            <ProjectCard
              imgSrc={item.imgSrc}
              imgAlt={item.title}
              avatarSrc={item.avatarSrc}
              cardTitle={item.title}
              description={item.description}
              url={item.url}
            />
          </List.Item>
        )}
      />
    </main>
  );
};

export default Content;
