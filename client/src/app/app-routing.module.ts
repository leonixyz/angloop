import { AuthenticationGuard } from './authentication/guards/authentication.guard';
import { AuthenticationMenuComponent } from './authentication/components/authentication-menu/authentication-menu.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: AuthenticationMenuComponent
  },
  {
    path: 'logout',
    component: AuthenticationMenuComponent
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [AuthenticationGuard]
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
