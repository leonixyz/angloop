import { AuthenticationService } from '../authentication/services/authentication.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isLoggedIn: boolean;

  constructor(
    private authn: AuthenticationService
  ) { }

  ngOnInit() {
    this.authn.getFromPersistency();
    this.isLoggedIn = this.authn.isLoggedIn();
  }

}
