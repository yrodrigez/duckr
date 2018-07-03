// Users
const initialUserState = {
  lastUpdate: 0,
  info: {
    name: '',
    uid: '',
    avatar: '',
  }
};

const initialState = {
  isFetching: false,
  error: '',
  isAuthed: false,
  userId: '',
};

const user = (state = initialUserState, action) => {
  switch (action.type) {
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        info: action.user,
        lastUpdate: action.timestamp,
      }
  }
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isAuthed: true,
        userId: action.userId
      };

    case UNAUTH_USER:
      return {
        ...state,
        isAuthed: false,
        userId: '',
      };

    case FETCHING_USER:
      return {
        ...state,
        isFetching: true,
      };

    case FETCHING_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };

    case FETCHING_USER_SUCCESS:
      return !action.user ? {
        ...state,
        error: '',
        isFetching: false
      } : {
        ...state,
        error: '',
        isFetching: false,
        [action.userId]: user(state[action.userId], action)
      };

    default:
      return state
  }
};

export {user, users};