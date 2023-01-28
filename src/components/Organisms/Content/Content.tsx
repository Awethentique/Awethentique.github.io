import React from 'react';
import { ProjectCard, List } from '../../index';
import { contentInfo } from '../../../data/AppData';
import './Content.less';

const Content = () => {
  // const data =
  return (
    <main className="app-content">
      <List
        // grid={{ gutter: 16, column: 3 }}
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 3,
          xl: 3,
          xxl: 3,
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
