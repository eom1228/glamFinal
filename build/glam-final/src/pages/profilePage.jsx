import React from 'react';
import MyProfilePictures from '../components/myProfilePictures';
import { useUsersContext } from '../contexts/UsersContext';
import { FaPhoneAlt } from 'react-icons/fa';
import styles from '../styles/profilePage.module.scss';
const ProfilePage = () => {
  const { usersCurrentState } = useUsersContext();
  const { me } = usersCurrentState;

  return (
    <>
      <section className={styles.wholePageBox}>
        <section className={styles.pageSection}>
          <h3>프로필 수정</h3>
          <section className={styles.profilePictures}>
            <MyProfilePictures />
          </section>
          <p style={{ paddingLeft: '2.5vw', borderBottom: '1px, solid, grey' }}>다양한 매력을 보여줄 수 있는 사진을 올려주세요</p>
          <div className={styles.textDetails}>
            {me && (
              <section className={styles.myDetails}>
                <div className={styles.myBasicInfo}>
                  {me.userName ? (
                    <div className={styles.nameCategory}>
                      <p className={styles.name}>닉네임 </p>
                      <p className={styles.myName} style={{ color: 'rgb(65, 138, 247)', width: '100%' }}>
                        {' '}
                        {me.userName}
                      </p>
                    </div>
                  ) : (
                    <div className={styles.nameCategory}>
                      <p className={styles.name}>닉네임 </p>
                      <p className={styles.myName} style={{ color: 'grey' }}>
                        입력해주세요
                      </p>
                    </div>
                  )}
                  {me.sex ? (
                    <div className={styles.sexCategory}>
                      <p className={styles.sex}>성별 </p>
                      <p className={styles.mySex} style={{ width: '100%' }}>
                        {me.sex}
                      </p>
                    </div>
                  ) : (
                    <div className={styles.sexCategory}>
                      <p className={styles.sex}>성별 </p>
                      <p className={styles.mySex} style={{ color: 'grey' }}>
                        입력해주세요
                      </p>
                    </div>
                  )}
                  {me.birthDate ? (
                    <div className={styles.birthCategory}>
                      <p className={styles.birthDate}>생일 </p>
                      <p className={styles.mybirthDate} style={{ color: 'rgb(65, 138, 247)', width: '100%' }}>
                        {me.birthDate}
                      </p>
                    </div>
                  ) : (
                    <div className={styles.birthCategory}>
                      <p className={styles.birthDate}>생일 </p>
                      <p className={styles.mybirthDate} style={{ color: 'grey' }}>
                        입력해주세요
                      </p>
                    </div>
                  )}

                  {me.location ? (
                    <div className={styles.locationCategory}>
                      <p className={styles.location}>위치 </p>
                      <p className={styles.myLocation} style={{ color: 'rgb(65, 138, 247)', width: '100%' }}>
                        {me.location}
                      </p>
                    </div>
                  ) : (
                    <div className={styles.locationCategory}>
                      <p className={styles.location}>위치 </p>
                      <p className={styles.myLocation} style={{ color: 'grey' }}>
                        입력해주세요
                      </p>
                    </div>
                  )}
                </div>
                <div className={styles.selfIntroCategory}>
                  <p className={styles.selfIntro}>소개</p>
                  <textarea
                    className={styles.selfIntroBox}
                    placeholder="회원님의 매력을 간단하게 소개해주세요"
                    style={{ border: 'none' }}
                  ></textarea>
                  <p style={{ margin: '0', fontSize: '12px' }}>SNS 아이디 등 연락처 입력 시 서비스 이용 제한됩니다</p>
                </div>

                <div className={styles.physicalAttributes}>
                  {me.height ? (
                    <div className={styles.heightCategory}>
                      <p className={styles.height}>키 </p>
                      <p className={styles.myHeight} style={{ color: 'rgb(65, 138, 247)', width: '100%' }}>
                        {me.height}
                      </p>
                    </div>
                  ) : (
                    <div className={styles.heightCategory}>
                      <p className={styles.height}>키 </p>
                      <p className={styles.myHeight} style={{ color: 'grey' }}>
                        입력해주세요
                      </p>
                    </div>
                  )}
                  {me.bodyType ? (
                    <div className={styles.bodyTypeCategory}>
                      <p className={styles.bodyType}>체형 </p>
                      <p className={styles.myBodyType} style={{ color: 'rgb(65, 138, 247)', width: '100%' }}>
                        {me.bodyType}
                      </p>
                    </div>
                  ) : (
                    <div className={styles.bodyTypeCategory}>
                      <p className={styles.bodyType}>체형 </p>
                      <p className={styles.myBodyType} style={{ color: 'grey' }}>
                        입력해주세요
                      </p>
                    </div>
                  )}
                </div>
                <div className={styles.learningExperience}>
                  {me.companyName ? (
                    <div className={styles.companyNameCategory}>
                      <p className={styles.companyName}>직장 </p>
                      <p className={styles.myCompanyName} style={{ color: 'rgb(65, 138, 247)', width: '100%' }}>
                        {me.companyName}
                      </p>
                    </div>
                  ) : (
                    <div className={styles.companyNameCategory}>
                      <p className={styles.companyName}>직장 </p>
                      <p className={styles.myCompanyName} style={{ color: 'grey' }}>
                        입력해주세요
                      </p>
                    </div>
                  )}
                  {me.jobField ? (
                    <div className={styles.jobFieldCategory}>
                      <p className={styles.jobField}>직업 </p>
                      <p className={styles.myJobField} style={{ color: 'rgb(65, 138, 247)', width: '100%' }}>
                        {me.jobField}
                      </p>
                    </div>
                  ) : (
                    <div className={styles.jobFieldCategory}>
                      <p className={styles.jobField}>직업 </p>
                      <p className={styles.myJobField} style={{ color: 'grey' }}>
                        입력해주세요
                      </p>
                    </div>
                  )}
                  {me.education ? (
                    <div className={styles.educationCategory}>
                      <p className={styles.education}>학력 </p>
                      <p className={styles.myEducation} style={{ color: 'rgb(65, 138, 247)', width: '100%' }}>
                        {me.education}
                      </p>
                    </div>
                  ) : (
                    <div className={styles.educationCategory}>
                      <p className={styles.education}>학력 </p>
                      <p className={styles.myEducation} style={{ color: 'grey' }}>
                        입력해주세요
                      </p>
                    </div>
                  )}
                  {me.school ? (
                    <div className={styles.schoolCategory}>
                      <p className={styles.school}>학교 </p>
                      <p className={styles.mySchool} style={{ color: 'rgb(65, 138, 247)', width: '100%' }}>
                        {me.school}
                      </p>
                    </div>
                  ) : (
                    <div className={styles.schoolCategory}>
                      <p className={styles.school}>학교 </p>
                      <p className={styles.mySchool} style={{ color: 'grey' }}>
                        입력해주세요
                      </p>
                    </div>
                  )}
                </div>
                <div className={styles.otherInfo}>
                  {me.personality ? (
                    <div className={styles.personalityCategory}>
                      <p className={styles.personality}>성격 </p>
                      <p className={styles.myPersonality} style={{ color: 'rgb(65, 138, 247)', width: '100%' }}>
                        {me.personality}
                      </p>
                    </div>
                  ) : (
                    <div className={styles.personalityCategory}>
                      <p className={styles.personality}>성격 </p>
                      <p className={styles.myPersonality} style={{ color: 'grey' }}>
                        입력해주세요
                      </p>
                    </div>
                  )}
                  {me.religion ? (
                    <div className={styles.religionCategory}>
                      <p className={styles.religion}>종교 </p>
                      <p className={styles.myReligion} style={{ color: 'rgb(65, 138, 247)', width: '100%' }}>
                        {me.religion}
                      </p>
                    </div>
                  ) : (
                    <div className={styles.religionCategory}>
                      <p className={styles.religion}>종교 </p>
                      <p className={styles.myReligion} style={{ color: 'grey' }}>
                        입력해주세요
                      </p>
                    </div>
                  )}
                  {me.drinkingFrequency ? (
                    <div className={styles.drinkingFrequencyCategory}>
                      <p className={styles.drinkingFrequency}>음주 </p>
                      <p className={styles.myDrinkingFrequency} style={{ color: 'rgb(65, 138, 247)', width: '100%' }}>
                        {me.drinkingFrequency}
                      </p>
                    </div>
                  ) : (
                    <div className={styles.drinkingFrequencyCategory}>
                      <p className={styles.drinkingFrequency}>음주 </p>
                      <p className={styles.myDrinkingFrequency} style={{ color: 'grey' }}>
                        입력해주세요
                      </p>
                    </div>
                  )}
                  {me.smoke ? (
                    <div className={styles.smokeCategory}>
                      <p className={styles.smoke}>흡연 </p>
                      <p className={styles.mySmoke} style={{ color: 'rgb(65, 138, 247)', width: '100%' }}>
                        {me.smoke}
                      </p>
                    </div>
                  ) : (
                    <div className={styles.smokeCategory}>
                      <p className={styles.smoke}>흡연 </p>
                      <p className={styles.mySmoke} style={{ color: 'grey', width: '100%' }}>
                        입력해주세요
                      </p>
                    </div>
                  )}
                  {me.bloodType ? (
                    <div className={styles.bloodTypeCategory}>
                      <p className={styles.bloodType}>혈액형 </p>
                      <p className={styles.myBloodType} style={{ color: 'rgb(65, 138, 247)', width: '100%' }}>
                        {me.bloodType}
                      </p>
                    </div>
                  ) : (
                    <div className={styles.bloodTypeCategory}>
                      <p className={styles.bloodType}>혈액형 </p>
                      <p className={styles.myBloodType} style={{ color: 'grey', width: '100%' }}>
                        입력해주세요
                      </p>
                    </div>
                  )}
                  {me.race ? (
                    <div className={styles.raceCategory}>
                      <p className={styles.race}>인종 </p>
                      <p className={styles.myRace} style={{ color: 'rgb(65, 138, 247)', width: '100%' }}>
                        {me.race}
                      </p>
                    </div>
                  ) : (
                    <div className={styles.raceCategory}>
                      <p className={styles.race}>인종 </p>
                      <p className={styles.myRace} style={{ color: 'grey', width: '100%' }}>
                        입력해주세요
                      </p>
                    </div>
                  )}

                  <div className={styles.authentication}>
                    <div className={styles.phoneAuthenticated}>
                      <FaPhoneAlt
                        style={{
                          alignSelf: 'center',
                          backgroundColor: 'green',
                          color: 'white',
                          border: '1px solid green',
                          borderRadius: '50%',
                        }}
                      />
                      <p style={{ paddingLeft: '10px', fontSize: '12px' }}>휴대전화번호 인증됨</p>
                    </div>
                  </div>
                </div>
                <section className={styles.charm} onClick={() => window.alert('준비중입니다')}>
                  <p className={styles.charmPoint}>매력 포인트</p>
                  <div className={styles.charmItems}>
                    <button className={styles.itemOne}>패션 감각</button>

                    <button className={styles.itemTwo}>배려심이 깊어요</button>
                    <button className={styles.itemThree}>다정해요</button>
                    <button className={styles.itemFour}>긍정적 마인드</button>
                  </div>
                </section>
                <section className={styles.interests} onClick={() => window.alert('준비중입니다')}>
                  <p className={styles.areasOfInterest}>관심사</p>
                  <div className={styles.areas}>
                    <button className={styles.areaOne}>음악</button>

                    <button className={styles.areaTwo}>패션 감각</button>
                  </div>
                </section>

                <div className={styles.lifeStyleCategory}>
                  <p className={styles.lifeStyle}>라이프 스타일</p>
                  <textarea className={styles.myLifeStyle} placeholder="입력해주세요" style={{ border: 'none', width: '100%' }}></textarea>
                  <p style={{ margin: '0', fontSize: '12px' }}>라이프 스타일은 추천에 활용되며 공개되지 않습니다</p>
                </div>

                {/* <div className={styles.selfIntroCategory}>
                  <p className={styles.selfIntro}>소개</p>
                  <textarea
                    className={styles.selfIntroBox}
                    placeholder="회원님의 매력을 간단하게 소개해주세요"
                    style={{ border: 'none' }}
                  ></textarea>
                  <p style={{ margin: '0', fontSize: '12px' }}>SNS 아이디 등 연락처 입력 시 서비스 이용 제한됩니다</p>
                </div> */}
                <div style={{ width: '100%', height: '10vh' }}></div>
              </section>
            )}
          </div>
        </section>
      </section>
    </>
  );
};

export default ProfilePage;
