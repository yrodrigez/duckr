const createAction = (type) => (params = {}) => ({type, ...params});
const createError = (error) => (params = {}) => ({error, ...params});

// Users
const AUTH_USER = 'AUTH_USER';
const AUTH_USER_ACTION = ({uid}) => createAction(AUTH_USER)({uid});

const UNAUTH_USER = 'UNAUTH_USER';
const UNAUTH_USER_ACTION = ({uid}) => createAction(UNAUTH_USER)({uid});

const FETCHING_USER = 'FETCHING_USER';
const FETCHING_USER_ACTION = createAction(FETCHING_USER);

const FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE';
const FETCHING_USER_FAILURE_ACTION = {
  error: FETCHING_USER_FAILURE,
};

const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS';
const FETCHING_USER_SUCCESS_ACTION = ({uid, user, timestamp}) =>
  createAction(FETCHING_USER_SUCCESS)({uid, user, timestamp});


//Ducks
const FETCHING_DUCK = 'FETCHING_DUCK';
const FETCHING_DUCK_ACTION = createAction(FETCHING_DUCK);

const FETCHING_DUCK_SUCCESS = 'FETCHING_DUCK_SUCCESS';
const FETCHING_DUCK_SUCCESS_ACTION = ({duck}) => createAction(FETCHING_DUCK_SUCCESS)({duck});

const FETCHING_DUCK_FAILURE = 'FETCHING_DUCK_FAILURE';
const FETCHING_DUCK_FAILURE_ACTION = {
  error: FETCHING_DUCK_FAILURE,
};

const REMOVE_FETCHING = 'REMOVE_FETCHING';
const REMOVE_FETCHING_ACTION = createAction(REMOVE_FETCHING);

const ADD_DUCK = 'ADD_DUCK';
const ADD_DUCK_ACTION = createAction(ADD_DUCK);

const ADD_MULTIPLE_DUCKS = 'ADD_MULTIPLE_DUCKS';
const ADD_MULTIPLE_DUCKS_ACTION = ({ducks}) => createAction(ADD_MULTIPLE_DUCKS)({ducks});

// Feed
const SETTING_FEED_LISTENER = 'SETTING_FEED_LISTENER';
const SETTING_FEED_LISTENER_ACTION = createAction(SETTING_FEED_LISTENER);

const FETCHING_FEED = 'FETCHING_FEED';
const FETCHING_FEED_ACTION = createAction(FETCHING_FEED);

const SETTING_FEED_LISTENER_FAILURE = 'FETCHING_FEED_FAILURE';
const SETTING_FEED_LISTENER_FAILURE_ACTION = {
  error: SETTING_FEED_LISTENER_FAILURE,
};

const SETTING_FEED_LISTENER_SUCCESS = 'SETTING_FEED_LISTENER_SUCCESS';
const SETTING_FEED_LISTENER_SUCCESS_ACTION = ({duckIds}) => createAction(SETTING_FEED_LISTENER_SUCCESS)({duckIds});

const RESET_NEWS_DUCKS_AVAILABLE = 'RESET_NEWS_DUCKS_AVAILABLE';
const RESET_NEWS_DUCKS_AVAILABLE_ACTION = createAction(RESET_NEWS_DUCKS_AVAILABLE);

const ADD_NEW_DUCK_ID_TO_FEED = 'ADD_NEW_DUCK_ID_TO_FEED';
const ADD_NEW_DUCK_ID_TO_FEED_ACTION = ({duckId}) => createAction(ADD_NEW_DUCK_ID_TO_FEED)({duckId});

// Listeners
const ADD_LISTENER = 'ADD_LISTENER';
const ADD_LISTENER_ACTION = ({listenerId}) => createAction(ADD_LISTENER)({listenerId});


// MODAL
const OPEN_MODAL = 'OPEN_MODAL';
const OPEN_MODAL_ACTION = createAction(OPEN_MODAL);

const CLOSE_MODAL = 'CLOSE_MODAL';
const CLOSE_MODAL_ACTION = createAction(CLOSE_MODAL);

const UPDATE_DUCK_TEXT = 'UPDATE_DUCK_TEXT';
const UPDATE_DUCK_TEXT_ACTION = ({newDuckText}) => createAction(UPDATE_DUCK_TEXT)({newDuckText});

//Replies
const FETCHING_REPLIES = 'FETCHING_REPLIES';
const FETCHING_REPLIES_ACTION = createAction(FETCHING_REPLIES);

const FETCHING_REPLIES_ERROR = 'FETCHING_REPLIES_ERROR';
const FETCHING_REPLIES_ERROR_ACTION = {
  error: FETCHING_REPLIES_ERROR,
};

const FETCHING_REPLIES_SUCCESS = 'FETCHING_REPLIES_SUCCESS';
const FETCHING_REPLIES_SUCCESS_ACTION = ({replies, duckId, lastUpdate = Date.now()}) =>
  createAction(FETCHING_REPLIES_SUCCESS)({replies, duckId, lastUpdate});


const ADD_REPLY = 'ADD_REPLY';
const ADD_REPLY_ACTION = ({type, duckId, reply}) => createAction(ADD_REPLY)({type, duckId, reply});

const ADD_REPLY_ERROR = 'ADD_REPLY_ERROR';
const ADD_REPLY_ERROR_ACTION = {
  error: ADD_REPLY_ERROR,
};

const REMOVE_REPLY = 'REMOVE_REPLY';
const REMOVE_REPLY_ACTION = ({replyId, duckId}) => createAction(REMOVE_REPLY)({replyId, duckId});

const ADD_LIKE = 'ADD_LIKE';
const ADD_LIKE_ACTION = createAction(ADD_LIKE);

//like count
const FETCHING_COUNT = 'FETCHING_COUNT';
const FETCHING_COUNT_ACTION = createAction(FETCHING_COUNT);

const FETCHING_COUNT_ERROR = 'FETCHING_COUNT';
const FETCHING_COUNT_ERROR_ACTION = () => ({
  error: FETCHING_COUNT_ERROR
});

const FETCHING_COUNT_SUCCESS = 'FETCHING_COUNT_SUCCESS';
const FETCHING_COUNT_SUCCESS_ACTION = ({duckId, count}) => createAction(FETCHING_COUNT_SUCCESS)({duckId, count});

const ADD_SINGLE_USERS_DUCK = 'ADD_SINGLE_USERS_DUCK';
const ADD_SINGLE_USERS_DUCK_ACTION = ({uid, duckId, lastUpdate}) => createAction(ADD_SINGLE_USERS_DUCK)({
  uid,
  duckId,
  lastUpdate
});

//usersLikes
const FETCHING_LIKES = 'FETCHING_LIKES';
const FETCHING_LIKES_ACTION = createAction(FETCHING_LIKES);

const FETCHING_LIKES_ERROR = 'FETCHING_LIKES_ERROR';
const FETCHING_LIKES_ERROR_ACTION = () => ({
  error: FETCHING_LIKES_ERROR
});

const FETCHING_LIKES_SUCCESS = 'FETCHING_LIKES_ERROR';
const FETCHING_LIKES_SUCCESS_ACTION = ({likes}) => createAction(FETCHING_LIKES_SUCCESS)({likes});

const ADD_USER_LIKE_ACTION = ({duckId}) => createAction(ADD_LIKE)({duckId});
const REMOVE_LIKE = 'REMOVE_LIKE';
const REMOVE_USER_LIKE_ACTION = ({duckId}) => createAction(REMOVE_LIKE)({duckId});


// usersDucks
const FETCHING_USERS_DUCKS = 'FETCHING_USERS_DUCKS';
const FETCHING_USERS_DUCKS_ACTION = createAction(FETCHING_USERS_DUCKS);

const FETCHING_USERS_DUCKS_ERROR = 'FETCHING_USERS_DUCKS_ERROR';
const FETCHING_USERS_DUCKS_ERROR_ACTION = createError(FETCHING_USERS_DUCKS_ERROR);

const FETCHING_USERS_DUCKS_SUCCESS = 'FETCHING_USERS_DUCKS_SUCCESS';
const FETCHING_USERS_DUCKS_SUCCESS_ACTION = ({uid, ducksIds, lastUpdate}) => createAction(FETCHING_USERS_DUCKS_SUCCESS)({
  uid,
  ducksIds,
  lastUpdate
});


