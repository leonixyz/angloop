import { Component } from '@angular/core';
import { environment as env } from '../environments/environment';
import { AuthenticationService } from './authentication/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = env.AppName;

  constructor(
    private authn: AuthenticationService
  ) { }

  isLoggedIn() {
    return this.authn.isLoggedIn();
  }

}
