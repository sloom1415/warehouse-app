const INITIAL_STATE = {
  id: 0,
  expand: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'select_pkg':
      return { ...state, id: action.payload };
    case 'unselect_pkg':
      return { ...state, id: action.payload };
    default:
      return state;
  }
};
