import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    AuthenticationRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    LoginComponent,
    LogoutComponent,
    RegistrationComponent
  ]
})
export class AuthenticationModule { }
