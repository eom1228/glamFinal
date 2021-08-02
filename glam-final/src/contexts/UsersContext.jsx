import React, { useReducer, createContext, useContext } from 'react';

export const usersState = {
  suggestedUsers: [
    {
      userId: 0,
      userName: '',
      age: 0,
      description: '',
      location: '',
      height: '',
      education: '',
      disliked: false,
      liked: false,
      interested: false,
      fileName: [],
    },
    {
      userId: 0,
      userName: '',
      age: 0,
      description: '',
      location: '',
      height: '',
      education: '',
      disliked: false,
      liked: false,
      interested: false,
      fileName: [],
    },
  ],
  // suggestedUsers: [],
  liveUser: [
    {
      userId: 0,
      userName: '',
      age: 0,
      description: '',
      location: '',
      height: '',
      education: '',
      rating: 0,
      fileName: [],
    },
    {
      userId: 1,
      userName: '',
      age: 0,
      description: '',
      location: '',
      height: '',
      education: '',
      rating: 0,
      fileName: [],
    },
    {
      userId: 2,
      userName: '',
      age: 0,
      description: '',
      location: '',
      height: '',
      education: '',
      rating: 0,
      fileName: [],
    },
  ],
  me: {
    userId: 0,
    userName: '',
    sex: '',
    birthDate: '',
    location: '',
    introduction: '',
    height: 0,
    bodyType: '',
    companyName: '',
    jobField: '',
    education: '',
    school: '',
    personality: '',
    religion: '',
    drinkingFrequency: '',
    smoke: '',
    bloodType: '',
    race: '',
    fileName: [],
  },
};

export const usersReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        suggestedUsers: action.suggestedUsers,
        liveUser: action.liveUser,
      };
    case 'GET_MYPROFILE':
      return {
        ...state,
        me: action.me,
      };
    // case 'LIKE_USER':
    //   return {
    //     ...state,
    //     suggestedUsers: [
    //       ...state.suggestedUsers,
    //       {
    //         [suggestedUsers[action.index]]: { ...state.suggestedUsers[action.index], liked: action.liked },
    //       },
    //     ],
    //   };
    case 'LIKE_USER':
      return {
        ...state,
        suggestedUsers: state.suggestedUsers.map((user, index) => (index === action.idx ? { ...user, liked: !user.liked } : user)),
      };
    // return {
    //   ...state,
    //   suggestedUsers: [state.suggestedUsers.map((item, index) => (index === action.idx ? { ...item, liked: !item.liked } : item))],
    // };
    // return {
    //   ...state,
    //   // suggestedUsers: [
    //   //   {
    //   //     ...state.suggestedUsers,
    //   //     user: { ...state.suggestedUsers.user, liked: true },
    //   //     // 확인
    //   //   },
    //   // ],
    //   suggestedUsers: [
    //     {
    //       ...state.suggestedUsers,
    //       [suggestedUsers[idx]]: {
    //         ...suggestedUsers[idx],
    //         liked: action.suggestedUsers[idx].liked,
    //       },
    //     },
    //   ],
    // };
    case 'DISLIKE_USER':
      return {
        ...state,
        suggestedUsers: state.suggestedUsers.map((user, index) => (index === action.idx ? { ...user, disliked: !user.disliked } : user)),
      };

    case 'INTERESTED_IN_USER':
      return {
        ...state,
        suggestedUsers: state.suggestedUsers.map((user, index) =>
          index === action.idx ? { ...user, interested: !user.interested } : user
        ),
      };
    case 'RATED_USER':
      return {
        ...state,
        liveUser: state.liveUser.map((user, id) => (id === action.id ? { ...user, rating: action.rating } : user)),
      };
    case 'FILTER_LIVE_USER':
      return {
        ...state,
        liveUser: action.liveUser,
      };

    default:
      return state;
  }
};

const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
  const [usersCurrentState, usersDispatch] = useReducer(usersReducer, usersState);

  return <UsersContext.Provider value={{ usersCurrentState, usersDispatch }}>{children}</UsersContext.Provider>;
};

export const useUsersContext = () => {
  const context = useContext(UsersContext);
  if (!context) {
    console.log('usersState Error');
  }
  return context;
};
