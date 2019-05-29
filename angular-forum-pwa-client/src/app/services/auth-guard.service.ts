import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {select, State} from '@ngrx/store';
import {AppState} from '../state/states/app.state';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private store: State<AppState>, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let observer = new Observable<boolean>((subscriber) => {
      this.store.pipe(select('auth')).subscribe((next) => {
        console.log('roles', route.data.permittedRoles);
        if (next.isLoggedIn && route.data.permittedRoles.includes(next.userRole.toUpperCase())) {
          subscriber.next(true);
        } else {
          this.router.navigate(['/sign-in']);
          subscriber.next(false);
        }
      });
    });

    return observer;
  }

}
