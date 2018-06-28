import {
  FETCH_BEGIN,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from '../actions/types';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function FetchReducer(OrderType = '') {
  return(
    function order(state = initialState, action){
      console.log(action);
      if (action.name !== OrderType) {
        return state;
      }
      switch (action.type) {
        case FETCH_BEGIN:
          return {
            ...state,
            loading: true,
            error: null
          };

        case FETCH_SUCCESS:
          return {
            ...state,
            loading: false,
            orders: action.payload.orders
          };

        case FETCH_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload.error,
          };

        default:
          return state;
      }
    }
  );
}
