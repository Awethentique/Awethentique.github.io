import React from 'react';
import { Typography, Icon, Card } from '../../index';
import './ContactInfo.less';

interface ContactInfoProps {
  linkUrl: string;
  userName: string;
  role: string;
  msg: string;
  className?: string;
}

const { Text, Link } = Typography;

const ContactInfo = ({
  linkUrl,
  userName,
  role,
  msg,
  className = '',
}: ContactInfoProps) => {
  const linkParts = linkUrl.split(' ');
  return (
    <div className={`cc-contact-info  ${className}`}>
      <Card>
        <Text className="link-parts-0">{linkParts[0]}</Text>
        <Text className="link-parts-1">{linkParts[1]}</Text>
        <Text
          className="link-parts-2"
          copyable={{ text: `${linkParts[0]}${linkParts[1]}` }}
        >
          {linkParts[2]}
        </Text>
        <p>
          <Text className="user-name-label">User:</Text>
          <Text className="user-name">{userName}</Text>
          <br />
          <Text className="role-label">Role:</Text>
          <Text className="role">{role}</Text>
        </p>
        <Text className="msg-label">WARNING:</Text>
        <Text className="msg">{msg}</Text>
      </Card>
      <div className="contact-info">
        <Icon
          fontIcon="awethentique-mail"
          popOverTitle="Send me an email"
          popOverContent={
            <Link href="mailto:ritesh.makan@gmail.com" target="_blank">
              ritesh.makan@gmail.com
            </Link>
          }
        />
        <Icon
          fontIcon="awethentique-linkedin-rect"
          popOverTitle="Find me on LinkedIn"
          popOverContent={
            <Link
              href="https://www.linkedin.com/in/riteshmakan/"
              target="_blank"
            >
              in/riteshmakan
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default ContactInfo;
