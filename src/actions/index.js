import { 
  SELECT, 
  DESELECT,  
  FETCH_BEGIN, 
  FETCH_SUCCESS,
  FETCH_FAILURE, 
  MATCH_BEGIN, 
  MATCH_SUCCESS, 
  MATCH_FAILURE ,
  PUT_CHECK
} from './types.js';
import { CURRENT_ORDERS_API } from './urls';
import _ from 'lodash';

export const select = (id) => {
  return {
    type: SELECT,
    payload: id
  };
};

export const deselect = (id) => {
  return {
    type: DESELECT,
    payload: id
  };
};

/* async function fetchRequest() {
  const response = await fetch(CURRENT_ORDERS_API)
  //.then(handleErrors)
  return response.json()


}
export const fetchOrders = (reducerType) => {
  return async dispatch => {
    dispatch(fetchOrderBegin(reducerType));
    try {
      const data = await fetchRequest()
      dispatch(fetchOrderSuccess(reducerType, data));
    }catch (error) {
        dispatch(fetchOrderfailure(reducerType, error))
      }
  };
} */

export function fetchPut(putType, id, data) {
  return async dispatch => {
    dispatch(fetchOrderBegin(PUT_CHECK));
    return fetch(`http://192.168.43.99/api/whss/${putType}/${id}/`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
          console.log(json);
        dispatch(fetchOrderSuccess(PUT_CHECK, json));
        return json;
      })
      .catch(error => dispatch(fetchOrderfailure(PUT_CHECK, error)));
  };
}

export function fetchOrders(reducerType) {
  return async dispatch => {
    dispatch(fetchOrderBegin(reducerType));
    return fetch(CURRENT_ORDERS_API)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
          console.log(json);
        dispatch(fetchOrderSuccess(reducerType, json));
        return json;
      })
      .catch(error => dispatch(fetchOrderfailure(reducerType, error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchOrderBegin = (reducerType) => ({
  name: reducerType,
  type: FETCH_BEGIN
});

export const fetchOrderSuccess = (reducerType, items) => ({
  name: reducerType,
  type: FETCH_SUCCESS,
  payload: { items }
});

export const fetchOrderfailure = (reducerType, error) => ({
  name: reducerType,
  type: FETCH_FAILURE,
  payload: { error }
});

export function matching(inData,outData, query) {
  return dispatch => {
    let match = _.find(inData, item => {
      return item.pk == query;
    })

    var message = '';
    var type = '';

    if(match){
      message = `Check in this package ID? \n ${match.pk}`;
      type = 'item';
    }
    else {
      match = _.find(outData, item => {
        return item.pk == query;
      })
      if(match)
        message = `Check out this item ID? \n ${match.pk}`;
        type = 'item';
    }
    if(match === undefined) {
      dispatch(matchFailure(`Sorry couldn\'t find a match for\n ${query}`));
    }
    else {
      dispatch(matchSuccess(message, match, type));
    }
  }
}

export const matchBegin = () => ({
  type: MATCH_BEGIN,
})

export const matchSuccess = (message, data, type) => ({
  type: MATCH_SUCCESS,
  payload: { message, data, type}
});

export const matchFailure = (message) => ({
  type: MATCH_FAILURE,
  payload: { message }
});