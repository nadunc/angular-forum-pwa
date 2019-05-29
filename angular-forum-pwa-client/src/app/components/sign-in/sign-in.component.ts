import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Store} from '@ngrx/store';
import {SignInSuccess} from '../../state/actions/auth.actions';
import {AppState} from '../../state/states/app.state';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  private email: string;
  private password: string;

  constructor(private store: Store<AppState>, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.email = '';
    this.password = '';
  }

  signIn() {
    this.authService.signIn(this.email, this.password).subscribe((next) => {
      this.store.dispatch(new SignInSuccess(next));
      this.router.navigate(['/']);
    }, (err) => {
      console.error(err);
    });
  }
}
