import {Action} from '@ngrx/store';
import {SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS} from './types';


export class SignInSuccess implements Action {
  readonly type = SIGN_IN_SUCCESS;

  constructor(public payload: any) {
  }
}

export class SignOutSuccess implements Action {
  readonly type = SIGN_OUT_SUCCESS;
}

export type Actions = SignInSuccess | SignOutSuccess;
