import { AuthenticationService } from '../../services/authentication.service';
import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  public error: any;
  public user: User;
  @Output() userLoggedOut = new EventEmitter<void>();

  constructor(
    private authn: AuthenticationService
  ) { }

  ngOnInit() {
    this.user = this.authn.getFromPersistency();
  }

  logout() {
    this.authn.logout()
      .subscribe(
        _ => this.userLoggedOut.emit(),
        err => this.error = err.error.error
      );
  }

}
