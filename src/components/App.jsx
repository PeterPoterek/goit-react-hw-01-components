import Profile from './Profile/Profile';
import user from './Profile/user.json';

export const App = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
    </>
  );
};
