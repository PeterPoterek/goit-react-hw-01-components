import React from 'react';
import {
  ProfileContainer,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  StatsList,
  StatItem,
  Label,
  Quantity,
} from './ProfileStyles';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatsList>
        <StatItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatItem>
        <StatItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatItem>
        <StatItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatItem>
      </StatsList>
    </ProfileContainer>
  );
};

export default Profile;
