import React from 'react';
import { useUsersContext } from '../contexts/UsersContext';
import LiveProfileSlider from './liveProfileSlider';

const LiveProfile = () => {
  const { usersCurrentState } = useUsersContext();
  const { liveUser } = usersCurrentState;

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {liveUser &&
          liveUser.map(user => (
            <>
              <LiveProfileSlider id={liveUser.indexOf(user)} />
            </>
          ))}
        {/* <LiveProfileSlider /> */}
      </div>
    </>
  );
};

export default LiveProfile;
