import React, { useEffect, useState } from 'react';
import suggestedUsersMiniData from '../dummyData/suggestedUsersMini';
import styles from '../styles/suggestedProfilesMini.module.scss';

const SuggestedMiniProfiles = () => {
  const [miniProfiles, setMiniProfiles] = useState([]);

  useEffect(() => {
    setMiniProfiles(suggestedUsersMiniData);
    console.log(miniProfiles);
    // miniProfileUser = miniProfiles.map(user => user);
  }, [miniProfiles]);
  const profilesFirstRow = miniProfiles.slice(0, 2);
  const profilesSecondRow = miniProfiles.slice(2);
  return (
    <div className={styles.miniProfiles}>
      <section className={styles.miniProfilesBox}>
        <section className={styles.firstRow}>
          {profilesFirstRow.map(user => (
            <>
              <section
                className={styles.miniCard}
                style={{
                  backgroundImage: `url(${user.fileName})`,
                }}
              >
                <section className={styles.miniCardBtm}>
                  <section className={styles.miniUserInfo}>
                    <article className={styles.miniBasicInfo}>
                      <p className={styles.miniNameAndAge}>
                        {user.userName}, {user.age}
                      </p>
                    </article>
                    <p className={styles.miniDescription}>{user.description}</p>
                    <p className={styles.miniLocation}>{user.location}</p>
                  </section>
                </section>
                <button className={styles.viewBtn} onClick={() => window.alert('준비중입니다')}>
                  보기
                </button>
              </section>
            </>
          ))}
        </section>
        <section className={styles.secondRow}>
          {profilesSecondRow.map(user => (
            <>
              <section
                className={styles.miniCard}
                style={{
                  backgroundImage: `url(${user.fileName})`,
                }}
              >
                <section className={styles.miniCardBtm}>
                  <section className={styles.miniUserInfo}>
                    <article className={styles.miniBasicInfo}>
                      <p className={styles.miniNameAndAge}>
                        {user.userName}, {user.age}
                      </p>
                    </article>
                    <p className={styles.miniDescription}>{user.description}</p>
                    <p className={styles.miniLocation}>{user.location}</p>
                  </section>
                </section>
                <button className={styles.viewBtn} onClick={() => window.alert('준비중입니다')}>
                  보기
                </button>
              </section>
            </>
          ))}
        </section>
      </section>

      <button>프로필 부스팅</button>
    </div>
  );
};

export default SuggestedMiniProfiles;
