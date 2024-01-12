import Profile from './Profile/Profile.jsx';
import Statistics from './Statistics/Statistics.jsx';

import user from './Profile/user.json';
import data from './Statistics/data.json';

import styled from 'styled-components';

const TasksContatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 10rem;
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
      </TasksContatiner>
    </>
  );
};
