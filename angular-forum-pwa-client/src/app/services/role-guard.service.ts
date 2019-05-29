import { Injectable } from '@angular/core';
import {select, State} from '@ngrx/store';
import {AppState} from '../state/states/app.state';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(private store: State<AppState>, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let observer = new Observable<boolean>((subscriber) => {
      this.store.pipe(select('auth')).subscribe((next) => {
        if (route.data.permittedRoles.includes(next.userRole.toUpperCase())) {
          subscriber.next(true);
        } else {
          this.router.navigate(['unauthorized'], {
            skipLocationChange: true, // minimal effect. see https://github.com/angular/angular/issues/17004
            queryParams: {
              url: state.url
            }});
          subscriber.next(false);
        }
      });
    });

    return observer;
  }
}
