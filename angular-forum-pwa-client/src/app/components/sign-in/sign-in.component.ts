import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Store} from '@ngrx/store';
import {SignInSuccess} from '../../state/actions/auth.actions';
import {AppState} from '../../state/states/app.state';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  private email: string;
  private password: string;

  constructor(private authService: AuthService, private store: Store<AppState>) {
  }

  ngOnInit() {
    this.email = '';
    this.password = '';
  }

  signIn() {
    this.authService.signIn(this.email, this.password).subscribe((next) => {
      this.store.dispatch(new SignInSuccess(next));
    }, (err) => {
      console.error(err);
    });
  }
}
