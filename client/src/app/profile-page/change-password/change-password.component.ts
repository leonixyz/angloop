import { AuthenticationService } from '../../authentication/services/authentication.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public oldPassword: string;
  public newPassword: string;
  public newPasswordConfirm: string;
  public error: any;
  public success: boolean;

  constructor(
    private authn: AuthenticationService
  ) { }

  ngOnInit() {
  }

  changePassword() {
    this.success = null;
    this.error = null;
    
    this.authn.changePassword(this.oldPassword, this.newPassword)
      .subscribe(
        _ => this.success = true,
        err => this.error = err.error.error
      );
  }

}
