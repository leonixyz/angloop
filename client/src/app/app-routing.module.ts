import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/components/login/login.component';
import { LogoutComponent } from './authentication/components/logout/logout.component';
import { RegistrationComponent } from './authentication/components/registration/registration.component';
import { AuthenticationGuard } from './authentication/guards/authentication.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
