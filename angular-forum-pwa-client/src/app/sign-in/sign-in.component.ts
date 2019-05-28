import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  private email: string;
  private password: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.email = '';
    this.password = '';
  }

  signIn() {
    this.authService.signIn(this.email, this.password).subscribe((next) => {
      console.log(next);
    }, (err) => {
      console.error(err);
    });
  }
}
