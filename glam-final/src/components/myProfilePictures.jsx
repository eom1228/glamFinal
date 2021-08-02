import React, { useEffect, useState } from 'react';
import { useUsersContext } from '../contexts/UsersContext';
import styles from '../styles/myProfilePictures.module.scss';
import myData from '../dummyData/myProfile';

const MyProfilePictures = () => {
  const { usersCurrentState, usersDispatch } = useUsersContext();
  const { me } = usersCurrentState;
  const { fileName } = me;
  const [profilePics, setProfilesPics] = useState([]);

  const getMyInfo = () => {
    usersDispatch({
      type: 'GET_MYPROFILE',
      me: myData,
    });
  };

  useEffect(() => {
    getMyInfo();
    console.log(me);
  }, [me]);

  // useEffect(() => {
  //   setProfilesPics(myData.fileName);
  //   console.log(profilePics);
  // }, []);

  let copiedPictures = [...fileName];
  const picturesFirstRow = copiedPictures.slice(0, 3);
  const picturesSecondRow = copiedPictures.slice(3);
  return (
    <section className={styles.myPicturesWhole}>
      <section className={styles.myPicturesBox}>
        <section className={styles.firstRow}>
          {picturesFirstRow.map(picture => (
            <>
              <section
                className={styles.myCard}
                style={{
                  backgroundImage: `url(${picture})`,
                }}
              ></section>
            </>
          ))}
        </section>
        <section className={styles.secondRow}>
          {picturesSecondRow.map(picture => (
            <>
              <section
                className={styles.myCard}
                style={{
                  backgroundImage: `url(${picture})`,
                }}
              ></section>
            </>
          ))}
        </section>
      </section>
    </section>
  );
};
export default MyProfilePictures;
