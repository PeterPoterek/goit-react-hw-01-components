import PropTypes from 'prop-types';

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

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendList;
