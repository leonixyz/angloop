import { AuthenticationService } from '../../services/authentication.service';
import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User;
  public error: any;
  @Output() userLoggedIn = new EventEmitter<void>();

  constructor(
    private authn: AuthenticationService
  ) { }

  ngOnInit() {
    this.user = this.authn.getFromPersistency() || new User();
  }

  login() {
    this.authn.login(this.user)
      .subscribe(
        _ => this.userLoggedIn.emit(),
        err => this.error = err.error
      );
  }
}
