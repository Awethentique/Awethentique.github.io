import React from 'react';
import { ProjectCard, List } from '../../index';
import HTML5PeriodicTable from '../../../assets/images/HTML5-periodic-table.png';
import UXEassessment from '../../../assets/images/UXE-assessment.png';
import AtomicDesign from '../../../assets/images/atomic-design.png';
import UXEassessmentAvatar from '../../../assets/images/avatars/assessment.png';
import HTML5PeriodicTableAvatar from '../../../assets/images/avatars/HTML5.png';
import AtomicDesignAvatar from '../../../assets/images/avatars/atom.png';


import './Content.less';

const Content = () => {
  const data = [
    // {
    //   imgSrc: UXEassessment,
    //   avatarSrc: UXEassessmentAvatar,
    //   title: 'UXE assessment',
    //   description:
    //     'I was tasked to build a web page as an assessment for a job interview. Here I taught myself some new libraries.',
    //   url: 'https://awethentique.github.io/projects/glofox-assessment/index.html',
    // },
    {
      imgSrc: HTML5PeriodicTable,
      avatarSrc: HTML5PeriodicTableAvatar,
      title: 'Periodic table',
      description:
        'Inspired by the work done by Mike Golus on a periodic table, I decided to further expand his project and make an HTML 5 variation.',
      url: 'https://awethentique.github.io/projects/HTML5-Periodic/index.html',
    },
    {
      imgSrc: AtomicDesign,
      avatarSrc: AtomicDesignAvatar,
      title: 'Atomic design principles',
      description:
        'The principles of Atomic design has taught the value in building scalable solutions from the start',
    },
  ];
  return (
    <main className="app-content">
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={data}
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
