import { MATCH_BEGIN, MATCH_SUCCESS, MATCH_FAILURE } from '../actions/types'

const INITIAL_STATE = {
    data: '',
    message: null,
    type: '',
    loading: false,
    error: null
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case MATCH_BEGIN:
        return { ...state, loading: true, error: null };
      case MATCH_SUCCESS:
        return { 
          ...state, 
          message: action.payload.message, 
          data: action.payload.data, 
          type: action.payload.type, 
          loading: false, 
          error: false 
        };
      case MATCH_FAILURE:
        return { 
          ...state, 
          message: action.payload.message, 
          loading: false, 
          error: true };
      default:
        return state;
    }
  };