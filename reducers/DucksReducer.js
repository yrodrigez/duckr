const initialState = {
  isFetching: true,
  error: '',

};
const ducks = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DUCK:
      return {
        ...state,
        isFetching: true,
      };

    case ADD_DUCK:
    case FETCHING_DUCK_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        [action.duck.duckId]: action.duck,
      };
    case FETCHING_DUCK_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case REMOVE_FETCHING:
      return {
        ...state,
        isFetching: false,
        error: '',
      };
    case ADD_MULTIPLE_DUCKS:
      return {
        ...state,
        ...action.ducks
      };
    default :
      return {...state}
  }
};

export default ducks;