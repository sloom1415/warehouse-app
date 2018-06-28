import { FETCH_BEGIN, FETCH_SUCCESS, FETCH_FAILURE } from './types.js';
import { CURRENT_ORDERS_API } from './urls';

export const selectPkg = (pkgId) => {
  return {
    type: 'select_pkg',
    payload: pkgId
  };
};

export const unselectPkg = (pkgId) => {
  return {
    type: 'unselect_pkg',
    payload: pkgId
  };
};

export function fetchOrders(orderType) {
  return dispatch => {
    dispatch(fetchOrderBegin(orderType));
    return fetch(CURRENT_ORDERS_API)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
          console.log(json);
        dispatch(fetchOrderSuccess(orderType, json));
        return json;
      })
      .catch(error => dispatch(fetchOrderfailure(orderType, error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchOrderBegin = (orderType) => ({
  name: orderType,
  type: FETCH_BEGIN
});

export const fetchOrderSuccess = (orderType, orders) => ({
  name: orderType,
  type: FETCH_SUCCESS,
  payload: { orders }
});

export const fetchOrderfailure = (orderType, error) => ({
  name: orderType,
  type: FETCH_FAILURE,
  payload: { error }
});
