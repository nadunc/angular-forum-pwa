import {Actions} from '../actions/auth.actions';
import {SIGN_IN_SUCCESS} from '../actions/types';
import {initialSate, IUserState} from '../states/user.state';

export function reducer(state = initialSate, action: Actions) {
  // console.log('auth reducer', states, action.payload);
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {...state, ...action.payload};
    default:
      return state;
  }
}
