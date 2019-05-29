import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {IUserState} from '../../state/states/user.state';
import {AppState} from '../../state/states/app.state';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  auth$: Observable<IUserState>;
  user: IUserState;

  constructor(private store: Store<AppState>) {
    this.auth$ = store.select('auth');
  }

  ngOnInit() {
    this.auth$.subscribe(next => {
      console.log('topmenu next', next);
      this.user = next;
    });
  }


}
