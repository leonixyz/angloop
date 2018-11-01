import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AuthenticationGuard } from './guards/authentication.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    LoginComponent,
    LogoutComponent,
    RegistrationComponent
  ],
  providers: [
    HttpClient,
    AuthenticationGuard
  ]
})
export class AuthenticationModule { }
