import { AuthenticationGuard } from './guards/authentication.guard';
import { AuthenticationMenuComponent } from './components/authentication-menu/authentication-menu.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoopbackInterceptor } from './interceptors/loopback.interceptor';
import { NgModule } from '@angular/core';
import { RegistrationComponent } from './components/registration/registration.component';

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
    AuthenticationGuard,
    { provide: HTTP_INTERCEPTORS, useClass: LoopbackInterceptor, multi: true },
  ]
})
export class AuthenticationModule { }
