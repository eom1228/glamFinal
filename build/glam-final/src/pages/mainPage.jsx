import React, { useEffect } from 'react';
import { useUsersContext } from '../contexts/UsersContext';
import SuggestedProfiles from '../components/suggestedProfiles';
import SuggestedMiniProfiles from '../components/suggestedProfilesMini';
import LiveProfile from '../components/liveProfile';
import suggestedUsersData from '../dummyData/suggestedUsers';
import liveUserData from '../dummyData/liveUser';
// import Footer from '../components/footer';

const MainPage = () => {
  const { usersCurrentState, usersDispatch } = useUsersContext();
  const { suggestedUsers } = usersCurrentState;

  const getOtherUsers = () => {
    usersDispatch({
      type: 'GET_USERS',
      suggestedUsers: suggestedUsersData,
      liveUser: liveUserData,
    });
    // setDummyUsers(suggestedUsersData);
    console.log(suggestedUsers);
  };
  useEffect(() => {
    // setSuggestedUsers(suggestedUsersData);

    getOtherUsers();
    console.log(suggestedUsers);
  }, []);
  // const getOtherUsers = () => {
  //   usersDispatch({
  //     type: 'GET_USERS',
  //     suggestedUsers: suggestedUsersData,
  //   });
  //   // setDummyUsers(suggestedUsersData);
  //   console.log(suggestedUsers);
  // };
  // useEffect(() => {
  //   // setSuggestedUsers(suggestedUsersData);

  //   getOtherUsers();
  // }, []);
  return (
    <section
      className="totalContainer"
      style={{ position: 'relative', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center' }}
    >
      <section className="wholeContainer" style={{ height: '100%', width: '40vw', display: 'flex', flexDirection: 'column' }}>
        <h3>오늘의 추천</h3>
        <SuggestedProfiles />
        <section className="miniProfilesContainer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SuggestedMiniProfiles />
        </section>
        <h3>실시간</h3>
        <LiveProfile />
      </section>
    </section>
  );
};

export default MainPage;
