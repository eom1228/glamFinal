import React, { useState, useEffect, useCallback } from 'react';
import { useUsersContext } from '../contexts/UsersContext';
import suggestedUsersData from '../dummyData/suggestedUsers';
import ProfileSlider from './profileSlider';
// import styles from '../styles/suggestedProfiles.module.scss';

const SuggestedProfiles = () => {
  const { usersCurrentState } = useUsersContext();
  const { suggestedUsers } = usersCurrentState;

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* {console.log(suggestedUsers.length)} */}

        {suggestedUsers &&
          suggestedUsers.map(user => (
            <>
              <ProfileSlider idx={suggestedUsers.indexOf(user)} />
            </>
          ))}
      </div>
    </>
  );
};

export default SuggestedProfiles;
