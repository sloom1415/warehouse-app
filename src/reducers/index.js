import { combineReducers } from 'redux';
import FetchReducer from './FetchReducer';
import SelectionReducer from './SelectionReducer';
import { INCOMING_ORDER, OUTGOING_ORDER, INCOMING_PKGS, OUTGOING_PKGS, ITEMS } from  '../actions/names';

export default combineReducers(
    {
      incoming: FetchReducer(INCOMING_ORDER),
      outgoing: FetchReducer(OUTGOING_ORDER),
      incomingPkgs: FetchReducer(INCOMING_PKGS),
      outgoingPkgs: FetchReducer(OUTGOING_PKGS),
      items: FetchReducer(ITEMS),
      selectedPkgId: SelectionReducer,

    }
);
