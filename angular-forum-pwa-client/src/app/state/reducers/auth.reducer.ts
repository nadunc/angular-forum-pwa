import {Actions} from '../actions/auth.actions';
import {SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS} from '../actions/types';
import {initialSate, IUserState} from '../states/user.state';

export function reducer(state = initialSate, action: Actions) {
  // console.log('auth reducer', states, action.payload);
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {...state, ...action.payload};
    case SIGN_OUT_SUCCESS:
      return {...state, ...initialSate};
    default:
      return state;
  }
}
