import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {API_ROUTES} from '../common/api-routes';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  signIn(email: string, password: string): Observable<any> {
    // return this.http.post(API_ROUTES.SIGN_IN, {email, password});

    let observer = new Observable(subscriber => {
      subscriber.next({username: 'nadunc', fname: 'Nadun', lname: 'Chamikara', token: 'test_token'});
    });

    return observer;
  }

  signUp(user: object): Observable<any> {
    return this.http.post(API_ROUTES.SIGN_UP, user);
  }

  
}
