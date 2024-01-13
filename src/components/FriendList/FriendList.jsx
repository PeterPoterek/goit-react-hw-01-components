import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem.jsx';

import { FriendListContainer, FriendListUl } from './FriendListStyles';

const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
      <FriendListUl>
        {friends.map(friend => {
          return (
            <FriendListItem
              key={friend.id}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
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
