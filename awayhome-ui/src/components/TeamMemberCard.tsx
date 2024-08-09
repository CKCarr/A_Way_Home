/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
} from '../app/MTailwind';

interface SocialLink {
  type: string;
  url: string;
}

interface TeamMemberCardProps {
  name: string;
  title: string;
  avatar: string;
  socialLinks: SocialLink[];
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  title,
  avatar,
  socialLinks,
}) => {
  const getLinkText = (type: string, url: string): string => {
    switch (type) {
      case 'github':
        return `GitHub: ${url.split('/').pop()}`;
      case 'linkedin':
        return `LinkedIn: ${url.split('/').pop()}`;
      case 'email':
        return `Email: ${url}`;
      case 'phone':
        return `Phone: ${url}`;
      case 'x':
        return `X: ${url.split('/').pop()}`;
      case 'facebook':
        return `Facebook: ${url.split('/').pop()}`;
      default:
        return url;
    }
  };

  return (
    <Card
      className="p-4 rounded-lg shadow-md text-center border-3 border-primary-blue"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <CardHeader
        className="flex justify-center bg-primary-blue"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Avatar
          src={avatar}
          alt={name}
          size="xxl"
          className="mb-4 border-2 border-bright-teal"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
      </CardHeader>
      <CardBody
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Typography
          variant="h4"
          className="mb-2"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {name}
        </Typography>
        <Typography
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {title}
        </Typography>
      </CardBody>
      <CardFooter
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {socialLinks.map((link) => (
          <Typography
            key={link.type}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <a
              href={
                link.type === 'email'
                  ? `mailto:${link.url}`
                  : link.type === 'phone'
                    ? `tel:${link.url}`
                    : link.url
              }
              className="text-turquoise"
              target="_blank"
              rel="noopener noreferrer"
            >
              {getLinkText(link.type, link.url)}
            </a>
          </Typography>
        ))}
      </CardFooter>
    </Card>
  );
};

export default TeamMemberCard;
