import { AuthenticationService } from '../../services/authentication.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User;
  public error: any;

  constructor(
    private authn: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.authn.getFromPersistency() || new User();
  }

  login() {
    this.authn.login(this.user)
      .subscribe(
        _ => this.router.navigate(['/']),
        err => this.error = err.error
      );
  }
}
