import React from 'react';
import { Avatar, Typography, Card  } from '../../index';

import './ProjectCard.less';

const { Paragraph, Text } = Typography;
const { Meta } = Card;

interface ProjectCardProps {
  imgSrc: string;
  imgAlt: string;
  avatarSrc: string;
  cardTitle: string | 'show-placeholder';
  description: string;
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
  // const [ellipsis, setEllipsis] = useState(true);

  const isPlaceholder = cardTitle === 'show-placeholder';

  const onclick = (e: any) => {
    if (e.target.ariaLabel === 'Expand') return;
    if (url) window.open(url);
  };

  const ContentCard = () => (
    <Card cover={<img alt={imgAlt} src={imgSrc} />}>
      <Meta
        avatar={<Avatar src={avatarSrc} />}
        // title={<Paragraph ellipsis={{ rows: 2 }}>{cardTitle}</Paragraph>}
        title={cardTitle}
        description={
          <Paragraph
            ellipsis={
              true ? { rows: 2, expandable: true, symbol: 'more' } : false
            }
          >
            {description}
          </Paragraph>
        }
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
