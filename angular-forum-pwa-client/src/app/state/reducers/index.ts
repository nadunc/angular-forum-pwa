import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import {reducer as AuthReducer} from './auth.reducer';
import {initialSate as initialUserState, IUserState} from '../states/user.state';
import {AppState} from '../states/app.state';




export const reducers: ActionReducerMap<AppState> = {
  auth: AuthReducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
