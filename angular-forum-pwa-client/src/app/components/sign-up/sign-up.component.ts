import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  private firstName: string;
  private lastName: string;
  private username: string;
  private email: string;
  private password: string;
  private repassword: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.firstName = '';
    this.lastName = '';
    this.username = '';
    this.email = '';
    this.password = '';
    this.repassword = '';
  }

  signUp() {
    let user = {
      fname: this.firstName,
      lname: this.lastName,
      username: this.username,
      email: this.email,
      password: this.password
    };

    this.authService.signUp(user).subscribe((next) => {
      console.log(next);
    }, (err) => {
      console.error(err);
    });
  }

}
