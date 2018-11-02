import * as EmailValidator from 'email-validator';
import { AuthenticationService } from '../../services/authentication.service';
import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public user: User;
  public emailConfirm: string;
  public passwordConfirm: string;
  public error: any;
  @Output() userRegistered = new EventEmitter<void>();
  public registrationSucceeded: boolean;

  constructor(
    private authn: AuthenticationService
  ) { }

  ngOnInit() {
    this.user = this.authn.getFromPersistency() || new User();
  }

  submitRegistration() {
    this.authn.submitRegistration(this.user)
      .subscribe(
        _ => {
          this.error = null;
          this.registrationSucceeded = true;
          this.userRegistered.emit();
        },
        err => {
          this.registrationSucceeded = false;
          this.error = err.error.error;
        }
      );
  }

  formIsValid() {
    return this.user.username &&
      this.user.email &&
      this.user.email === this.emailConfirm &&
      this.isValidEmail(this.user.email) &&
      this.user.password &&
      this.user.password === this.passwordConfirm;
  }

  isValidEmail(email: string) {
    return EmailValidator.validate(email);
  }

}
