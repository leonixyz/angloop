import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { BrowserModule } from '@angular/platform-browser';
import { ChangePasswordComponent } from './profile-page/change-password/change-password.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfilePageComponent,
    ChangePasswordComponent
  ],
  imports: [
    AppRoutingModule,
    AuthenticationModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
