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
  public error: any;
  public saved: boolean;

  constructor(
    private authn: AuthenticationService
  ) { }

  ngOnInit() {
    this.user = this.authn.getFromPersistency();
  }

  updateProfile() {
    this.error = null;
    this.saved = false;
    this.authn.writePersistent(this.user);

    this.authn.updateProfile(this.user)
      .subscribe(
        _ => this.saved = true,
        err => this.error = err.error
      );
  }

}
