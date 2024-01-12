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
          const statusColor = {
            backgroundColor: friend.isOnline ? 'green' : 'red',
          };

          return (
            <FriendListItem key={friend.id}>
              <Status style={statusColor} />
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
