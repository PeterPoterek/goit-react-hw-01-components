import { FriendListLI, Status, Avatar, Name } from './FriendListItemStyles';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusColor = {
    backgroundColor: isOnline ? 'green' : 'red',
  };

  return (
    <FriendListLI>
      <Status style={statusColor} />
      <Avatar src={avatar} />
      <Name>{name}</Name>
    </FriendListLI>
  );
};

export default FriendListItem;
