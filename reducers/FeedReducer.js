const initialState = {
  error: '',
  ducksIds: [],
  isFetching: false,
  ducksIdsToAdd: [],
  newDucksAvailable: false,
};
const feed = (state = initialState, action) => {
  switch (action.type) {

    case FETCHING_FEED:
      return {
        ...state,
        isFetching: true,
      };
    case SETTING_FEED_LISTENER:
      return {
        ...state,
        isFetching: true,
      };


    case SETTING_FEED_LISTENER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    case SETTING_FEED_LISTENER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        duckIds: action.duckIds,
        newDucksAvailable: false,
      };

    case RESET_NEWS_DUCKS_AVAILABLE:
      return {
        ...state,
        ducksIds: [...state.newDucksToAdd, ...state.duckIds]
      };

    case ADD_NEW_DUCK_ID_TO_FEED:
      return {
        ...state,
        newDucksToAdd: [action.duckId, ...state.newDucksToAdd]
      };

    default:
      return {
        ...state
      }
  }
};