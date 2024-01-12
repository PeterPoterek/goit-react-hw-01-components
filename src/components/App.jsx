import Profile from './Profile/Profile.jsx';
import Statistics from './Statistics/Statistics.jsx';

import user from './Profile/user.json';
import data from './Statistics/data.json';
export const App = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        /> */}

        <Statistics title={'Upload Stats'} stats={data} />
      </div>
    </>
  );
};
