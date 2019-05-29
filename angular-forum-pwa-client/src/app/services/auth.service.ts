import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {API_ROUTES} from '../common/api-routes';
import {IUserState} from '../state/states/user.state';
import {Store} from '@ngrx/store';
import {AppState} from '../state/states/app.state';
import {SignInSuccess, SignOutSuccess} from '../state/actions/auth.actions';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private store: Store<AppState>, private http: HttpClient, private router: Router) {
  }

  signIn(email: string, password: string): Observable<any> {
    // return this.http.post(API_ROUTES.SIGN_IN, {email, password});

    let observer = new Observable(subscriber => {
      const user: IUserState = {
        username: 'nadunc',
        fname: 'Nadun',
        lname: 'Chamikara',
        token: 'test_token',
        userRole: 'admin',
        isLoggedIn: true
      };
      subscriber.next(user);
    });

    return observer;
  }

  signUp(user: object): Observable<any> {
    return this.http.post(API_ROUTES.SIGN_UP, user);
  }

  signOut() {
    this.store.dispatch(new SignOutSuccess());
    this.router.navigate(['/']);
  }

}
