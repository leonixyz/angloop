import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-authentication-menu',
  templateUrl: './authentication-menu.component.html',
  styleUrls: ['./authentication-menu.component.css']
})
export class AuthenticationMenuComponent implements OnInit {

  public isLoggedIn: boolean;

  constructor(
    private authn: AuthenticationService
  ) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.isLoggedIn = this.authn.isLoggedIn();
  }
}
