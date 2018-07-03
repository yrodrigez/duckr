const initialState = {
  isFetching: true,
  error: ''
};


export const userLikes = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_LIKES:
      return {
        ...state,
        isFetching: true,
      };

    case FETCHING_LIKES_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };

    case ADD_LIKE:
      return {
        ...state,
        [action.duckId]: true,
      };

    case FETCHING_LIKES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ...action.likes,
        error: ''
      };

    case REMOVE_LIKE:
      return Object.keys(state)
        .filter( duckId => action.duckId !== duckId)
        .reduce((prev, curr) => {
          prev[curr] = state[curr];
          return prev
        }, {});
    default:
      return state
  }
};