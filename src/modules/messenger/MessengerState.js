/**
 * Created by m.cho on 8/26/16.
 */
import {Map, List} from 'immutable';
import {loop, Effects} from 'redux-loop';


// Initial state
const initialState = Map({
  messages: new List(),
});


// Actions
const SEND = 'MessageState/SEND';
const RECEIVE = 'MessageState/RECEIVE';
const LISTEN = 'MessageState/LISTEN';

// Action creators
export function send(message={}) {
  return {type: SEND, message};
}

export function receive(message={}) {
  return {type: RECEIVE, message};
}

// Reducer
export default function MessengerStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    // case LISTEN:
    //   messagesRef.on('child_added', () => {
    //
    //   });
    //
    // case SEND:
    //   return state.messages.push(action.message);

    case RECEIVE:
      const messages = state.get('messages');
      messages.push(action.message);
      return state.set('messages', messages);

    default:
      return state;
  }
}
