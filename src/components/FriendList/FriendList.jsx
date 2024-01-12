import React from 'react';
import {
  FriendListContainer,
  FriendListUl,
  FriendListItem,
  Status,
  Avatar,
  Name,
} from './FriendListStyles';

const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
      <FriendListUl>
        {friends.map(friend => {
          return (
            <FriendListItem key={friend.id}>
              <Status isOnline={friend.isOnline} />
              <Avatar src={friend.avatar} />
              <Name>{friend.name}</Name>
            </FriendListItem>
          );
        })}
      </FriendListUl>
    </FriendListContainer>
  );
};

export default FriendList;
