import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { User } from '../authentication/models/user';
import { AuthenticationService } from '../authentication/services/authentication.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  public user: User;

  constructor(
    private authn: AuthenticationService
  ) { }

  ngOnInit() {
    this.user = this.authn.getFromPersistency();
  }

}
