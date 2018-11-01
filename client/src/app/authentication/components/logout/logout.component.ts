import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  public error: any;
  public user: User;

  constructor(
    private authn: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.authn.getFromPersistency();
  }

  logout() {
    this.authn.logout()
      .subscribe(
        _ => this.router.navigate(['login']),
        err => this.error = err.error.error
      );
  }

}
