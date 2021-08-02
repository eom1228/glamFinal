import React, { useState, useEffect, useCallback } from 'react';
import { useUsersContext } from '../contexts/UsersContext';
import suggestedUsersData from '../dummyData/suggestedUsers';
import styles from '../styles/profileSlider.module.scss';
import { FaStar } from 'react-icons/fa';
const ProfileSlider = ({ user, idx }) => {
  const { usersCurrentState, usersDispatch } = useUsersContext();
  const { suggestedUsers } = usersCurrentState;
  const [userOneCurrent, setUserOneCurrent] = useState(0);
  const [userTwoCurrent, setUserTwoCurrent] = useState(0);

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
  //   console.log(suggestedUsers);
  // }, []);

  let userOneImgLength = suggestedUsersData[0].fileName.length;
  let userTwoImgLength = suggestedUsersData[1].fileName.length;

  const prevSlide = useCallback(
    index => {
      if (userOneImgLength) {
        setUserOneCurrent(userOneCurrent === 0 ? suggestedUsersData[0].fileName.length - 1 : userOneCurrent - 1);
      }
      if (userTwoImgLength) {
        setUserTwoCurrent(userTwoCurrent === 0 ? suggestedUsersData[1].fileName.length - 1 : userTwoCurrent - 1);
      }
    },
    [userOneImgLength, userTwoImgLength, userOneCurrent, userTwoCurrent]
  );

  const nextSlide = useCallback(
    index => {
      if (userOneImgLength) {
        setUserOneCurrent(userOneCurrent === suggestedUsersData[0].fileName.length - 1 ? 0 : userOneCurrent + 1);
      }
      if (userTwoImgLength) {
        setUserTwoCurrent(userTwoCurrent === suggestedUsersData[1].fileName.length - 1 ? 0 : userTwoCurrent + 1);
      }
    },
    [userOneImgLength, userTwoImgLength, userOneCurrent, userTwoCurrent]
  );

  const dislike = useCallback(
    idx => {
      usersDispatch({
        type: 'DISLIKE_USER',
        idx,
      });
    },
    [idx, suggestedUsers[idx].disliked]
  );

  const like = useCallback(
    idx => {
      // e.preventDefault();
      // console.log(suggestedUsers[idx]);
      usersDispatch({
        type: 'LIKE_USER',
        idx,
      });
      console.log(suggestedUsers[idx]);
    },
    [idx, suggestedUsers[idx].liked]
  );

  const showInterest = useCallback(
    idx => {
      usersDispatch({
        type: 'INTERESTED_IN_USER',
        idx,
      });
    },
    [idx, suggestedUsers[idx].interested]
  );

  return (
    <div className={styles.profileSlider}>
      {/* {console.log(idx)} */}

      <>
        {suggestedUsers[idx].fileName.map((image, index) => {
          return (
            <>
              {/* {image === suggestedUsers[0].fileName[index] ? ( */}
              <div className={index === userOneCurrent || userTwoCurrent ? 'active slide' : 'slide'} key={index}>
                {index === (userOneCurrent || userTwoCurrent) && (
                  <>
                    {console.log(user)}
                    {console.log(image)}
                    {console.log('yayaaaa', suggestedUsers[0].fileName)}
                    <section
                      className={styles.card}
                      style={{
                        backgroundImage: `url(${image})`,
                      }}
                    >
                      <div className={styles.arrows}>
                        <div
                          className={styles.leftArrow}
                          onClick={() => {
                            prevSlide(index);
                          }}
                        >
                          &#8592;
                        </div>
                        <div
                          className={styles.rightArrow}
                          onClick={() => {
                            nextSlide(index);
                          }}
                        >
                          &#8594;
                        </div>
                      </div>

                      {console.log(user)}
                      <section className={styles.cardBottom}>
                        <section className={styles.userInfo}>
                          <article className={styles.basicInfo}>
                            <p className={styles.nameAndAge}>
                              {suggestedUsers[idx].userName}, {suggestedUsers[idx].age}
                            </p>
                            <button className={styles.infoBtn}>i</button>
                          </article>
                          <p className={styles.description}>{suggestedUsers[idx].description}</p>
                          <p className={styles.heightAndEducation}>
                            {suggestedUsers[idx].height}·{suggestedUsers[idx].education}
                          </p>
                        </section>
                        <section className={styles.buttons}>
                          <button
                            className={styles.dislikeBtn}
                            style={suggestedUsers[idx].disliked === false ? { backgroundColor: 'grey' } : { backgroundColor: 'red' }}
                            onClick={() => {
                              dislike(idx);
                            }}
                          >
                            X
                          </button>
                          <button
                            className={styles.likeBtn}
                            onClick={() => {
                              like(idx);
                            }}
                          >
                            {suggestedUsers[idx].liked === false ? '좋아요' : '좋아요 보냄'}
                          </button>
                          <button
                            className={styles.interestBtn}
                            onClick={() => {
                              showInterest(idx);
                            }}
                          >
                            {/* \u2B50 */}
                            {suggestedUsers[idx].interested === false ? <FaStar /> : <FaStar style={{ color: 'yellow' }} />}
                          </button>
                        </section>
                      </section>
                    </section>
                  </>
                )}
              </div>
            </>
          );
        })}
      </>
    </div>
  );
};

export default ProfileSlider;
