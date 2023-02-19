import './ProjectCard.less';

import React from 'react';

import { Avatar, Card, ShowMore } from '../../index';

const { Meta } = Card;

interface ProjectCardProps {
  imgSrc: string;
  imgAlt: string;
  avatarSrc: string;
  cardTitle: string | 'show-placeholder';
  description: [];
  url?: string;
}

const ProjectCard = ({
  imgSrc,
  imgAlt,
  avatarSrc,
  cardTitle,
  description,
  url,
}: ProjectCardProps) => {
  const isPlaceholder = cardTitle === 'show-placeholder';

  const onclick = (e: any) => {
    if (e.target.ariaLabel === 'Expand') return;
    if (url) window.open(url);
  };

  const ContentCard = () => (
    <Card cover={<img alt={imgAlt} src={imgSrc} />}>
      <Meta
        avatar={<Avatar src={avatarSrc} />}
        title={cardTitle}
        description={<ShowMore textArray={description} />}
      />
    </Card>
  );

  return (
    <div
      className={`cc-project-card ${isPlaceholder ? 'card-placeholder' : ''} ${
        url ? 'has-click-through' : ''
      }`}
      onClick={onclick}
    >
      {isPlaceholder ? <Card>+</Card> : <ContentCard />}
    </div>
  );
};

export default ProjectCard;
