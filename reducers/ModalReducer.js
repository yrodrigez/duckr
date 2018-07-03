const initialState = {
  duckText: '',
  isOpen: false,
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
      };

    case UPDATE_DUCK_TEXT:
      return {
        duckText: action.newDuckText
      };

    default:
      return state;

  }
};