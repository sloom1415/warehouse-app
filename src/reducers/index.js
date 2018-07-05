import { combineReducers } from 'redux';
import FetchReducer from './FetchReducer';
import SelectionReducer from './SelectionReducer';
import MatchReducer from './MatchReducer'
import { INCOMING_ORDER, OUTGOING_ORDER, INCOMING_PKGS, OUTGOING_PKGS, ITEMS, PUT_CHECK } from  '../actions/names';

export default combineReducers(
    {
      incoming: FetchReducer(INCOMING_ORDER),
      outgoing: FetchReducer(OUTGOING_ORDER),
      incomingPkgs: FetchReducer(INCOMING_PKGS),
      outgoingPkgs: FetchReducer(OUTGOING_PKGS),
      items: FetchReducer(ITEMS),
      putCheck: FetchReducer(PUT_CHECK),
      match: MatchReducer,
      selectedId: SelectionReducer,
    }
);
