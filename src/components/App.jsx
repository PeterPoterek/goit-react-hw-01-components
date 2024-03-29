import Profile from './Profile/Profile.jsx';
import Statistics from './Statistics/Statistics.jsx';
import FriendList from './FriendList/FriendList.jsx';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';

import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';

import styled from 'styled-components';

const TasksContatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
`;

export const App = () => {
  return (
    <>
      <TasksContatiner>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />

        <Statistics title={'Upload Stats'} stats={data} />

        <FriendList friends={friends} />

        <TransactionHistory items={transactions} />
      </TasksContatiner>
    </>
  );
};
