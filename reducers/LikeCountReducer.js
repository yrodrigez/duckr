
const count = (state = 0, action) => {
  switch (action.type) {
    case ADD_LIKE :
      return state + 1;
    case REMOVE_LIKE :
      return state - 1;
    default :
      return state
  }
};
const initialState = {
  error: '',
  isFetching:false,

};
export const likeCount = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_COUNT:
      return {
        ...state,
        isFetching: true,
      };

    case FETCHING_COUNT_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };

    case FETCHING_COUNT_SUCCESS:
      return {
        ...state,
        ...initialState,
        [action.duckId]: action.count,
      };

    case ADD_LIKE:
    case REMOVE_LIKE:
      return typeof state[action.duckId] === 'undefined'
        ? state
        : {
          ...state,
          [action.duckId]: count(state[action.duckId], action),
        };

    default:
      return state;
  }
};