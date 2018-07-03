const initialState = {
  isFetching: false,
  error: ''

};

const initialDucksState = {
  lastUpdated: Date.now(),
  replies: {}
};


const initialReplyState = {
  uid: '',
  name: '',
  reply: '',
  avatar: '',
  replyId: '',
  timestamp: 0,
};

const duckReplies = (state = initialReplyState, action) =>{
  switch (action.type){
    case ADD_REPLY:
      return {
        ...state,
        [action.reply.replyId]: action.reply,
      };

    case REMOVE_REPLY:
      return{
        ...state,
        [action.reply.replyId]: undefined,
      };
    default: return state
  }
};

const repliesAndLastUpdated = (state = initialDucksState, action) => {
    switch (action.type){
      case FETCHING_REPLIES_SUCCESS:
        return {
          ...state,
          lastUpdated: action.lastUpdated,
          replies: action.replies
      };

      case ADD_REPLY:
      case REMOVE_REPLY:
        return {
          ...state,
          replies: duckReplies(state.replies, action)
        };
      default:
        return state
    }
};

export default replies = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_REPLIES:
      return {
        ...state,
        isFetching: true,
      };

    case FETCHING_REPLIES_ERROR:
    case ADD_REPLY_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    case ADD_REPLY:
    case FETCHING_REPLIES_SUCCESS:
    case REMOVE_REPLY:
      return {
        ...state,
        isFetching: false,
        error: '',
        [action.duckId]: repliesAndLastUpdated(state[action.duckId], action)
      };
    default:
      return {
        ...state,

      };
  }
}