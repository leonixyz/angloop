import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AuthenticationMenuComponent } from './components/authentication-menu/authentication-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    AuthenticationMenuComponent,
    LoginComponent,
    LogoutComponent,
    RegistrationComponent
  ],
  declarations: [
    LoginComponent,
    LogoutComponent,
    RegistrationComponent,
    AuthenticationMenuComponent
  ],
  providers: [
    HttpClient,
    AuthenticationGuard
  ]
})
export class AuthenticationModule { }
