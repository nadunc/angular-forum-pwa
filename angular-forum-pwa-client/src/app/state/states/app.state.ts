import {IUserState} from './user.state';

export interface AppState {
  // readonly auth: any;
  readonly auth: IUserState;
}
