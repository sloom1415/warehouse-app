import { SELECT, DESELECT } from '../actions/types'
const INITIAL_STATE = {
  id: 0,
  expand: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT:
      return { ...state, id: action.payload, expand: true };
    case DESELECT:
      return { ...state, id: action.payload, expand: false };
    default:
      return state;
  }
};
