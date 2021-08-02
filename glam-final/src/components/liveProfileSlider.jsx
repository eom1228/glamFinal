import React, { useState, useCallback } from 'react';
import { useUsersContext } from '../contexts/UsersContext';
import Rate from '../components/profileRating';

import styles from '../styles/liveProfileSlider.module.scss';

const LiveProfileSlider = ({ id, user }) => {
  const { usersCurrentState } = useUsersContext();
  const { liveUser } = usersCurrentState;
  const [current, setCurrent] = useState(0);

  // const sliderRef = useRef(id);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  let length = [];

  for (let user = 0; user < liveUser.length; user++) {
    let pictureLength = 0;
    pictureLength = liveUser[user].fileName.length;
    length.push(pictureLength);
  }

  const prevSlide = useCallback(
    index => {
      if (length[id]) {
        setCurrent(current === 0 ? liveUser[id].fileName.length - 1 : current - 1);
      }
    },
    [current, id, length, liveUser]
  );

  const nextSlide = useCallback(
    index => {
      if (length[id]) {
        setCurrent(current === liveUser[id].fileName.length - 1 ? 0 : current + 1);
      }
    },
    [current, id, length, liveUser]
  );

  // const alreadyRemoved = [];

  // const rated = (rate, ratedName, id) => {
  //   if (rate === '') {
  //     usersDispatch({
  //       type: 'RATED_USER',
  //       id,
  //     });
  //     alreadyRemoved.push(ratedName);
  //     console.log(alreadyRemoved);
  //   }
  // };

  // const outOfFrame = name => {
  //   liveUserData = liveUserData.filter(user => user.userName !== name);
  //   usersDispatch({
  //     type: 'FILTER_LIVE_USER',
  //     liveUser: liveUserData,
  //   });
  // };

  // const rate = () => {
  //   const profilesLeft = liveUser.filter(user => !alreadyRemoved.includes(user.userName));
  //   if (profilesLeft.length) {
  //     const toBeRemoved = profilesLeft[profilesLeft.length - 1].userName;
  //     const index = liveUser.map(user => user.userName).indexOf(toBeRemoved);
  //     alreadyRemoved.push(toBeRemoved);
  //     liveUser[id].rate();
  //   }
  //   console.log('됐니?');
  // };
  return (
    <>
      {/* {liveUser.map((user, idx) => ( */}

      <div
        className={styles.liveProfileSlider}
        // ref={sliderRef}
        // key={liveUser[id].userName}
        // onRated={rate => rated(rate, liveUser[id].userName, id)}
      >
        <>
          {liveUser[id].fileName.map((image, index) => {
            // {user.fileName.map((image, index) => {
            return (
              <>
                <div className={index === current ? 'active slide' : 'slide'} key={index}>
                  {index === current && (
                    // <section ref={childRefs[id]}>
                    <>
                      <section
                        className={styles.liveCard}
                        style={{
                          backgroundImage: `url(${image})`,
                        }}
                      >
                        <div className={styles.cardArrows}>
                          <div
                            className={styles.toLeft}
                            onClick={() => {
                              prevSlide(index);
                            }}
                          >
                            &#8592;
                          </div>
                          <div
                            className={styles.toRight}
                            onClick={() => {
                              nextSlide(index);
                            }}
                          >
                            &#8594;
                          </div>
                        </div>
                        <section className={styles.cardBtm}>
                          <section className={styles.liveUserInfo}>
                            <article className={styles.userBasicInfo}>
                              <p className={styles.userNameAndAge}>
                                {liveUser[id].userName}, {liveUser[id].age}
                              </p>
                              <button className={styles.userInfoBtn}>i</button>
                            </article>
                            <p className={styles.userDescription}>{liveUser[id].description}</p>
                            <p className={styles.userHeightAndEducation}>
                              {liveUser[id].height}·{liveUser[id].education}
                            </p>
                          </section>
                        </section>
                        <div className={styles.starRating}>
                          {/* <Rate rating={rating} hover={hover} setRating={setRating} setHover={setHover} id={id} /> */}
                          <Rate id={id} />
                        </div>
                      </section>
                      <div style={{ width: '100%', height: '10vh' }}></div>
                    </>
                    // </section>
                  )}
                </div>
              </>
            );
          })}
        </>
      </div>
      {/* ))} */}
    </>
  );
};

export default LiveProfileSlider;
