import { environment as env } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user: User;

  constructor(
    private http: HttpClient
  ) {
    this.getFromPersistency();
  }

  public submitRegistration(user: User) {
    return this.http.post(`${env.API}/Users`, user);
  }

  public login(user: User) {
    return this.http.post(`${env.API}/Users/login`, user)
      .pipe(
        map(async (resp: {
            id: string,
            ttl: number,
            created: string,
            userId: number
          }) => {
            // calculate expiration date of the token
            let expiration = new Date(resp.created);
            expiration = new Date(expiration.getTime() + (resp.ttl * 1000));
            user.expiration = expiration;
            // clear password - we don't want to cache it
            user.password = null;
            // save
            user.token = resp.id;
            // get additional data
            const cachedUser = await this.http.get<User>(`${env.API}/Users/${resp.userId}?access_token=${user.token}`).toPromise();
            user.id = cachedUser.id;
            user.email = cachedUser.email;

            this.writePersistent(user);

            return user;
          }
        )
      );
  }

  public logout(): Observable<any> {
    if (!this.user) {
      const s = new Subject();
      s.error({ error: { error: { message: 'No user logged in' }}});
      return s.asObservable();
    }

    return this.http.post(`${env.API}/Users/logout`, null)
      .pipe(
        map(resp => this.clearPersistent())
      );
  }

  public changePassword(oldPassword: string, newPassword: string) {
    return this.http.post(`${env.API}/Users/change-password`, 
      {
        'oldPassword': oldPassword,
        'newPassword': newPassword
      }
    );
  }

  public writePersistent(user: User) {
    this.user = user;
    window.localStorage.setItem('user', JSON.stringify(user));
  }

  public clearPersistent() {
    this.user = null;
    window.localStorage.removeItem('user');
  }

  public getFromPersistency() {
    const json = window.localStorage.getItem('user');
    this.user = JSON.parse(json) as User;

    if (this.user) {
      this.user.expiration = new Date(this.user.expiration);

      if (new Date().getTime() > this.user.expiration.getTime()) {
        this.clearPersistent();
      }
    }

    return this.user;
  }

  public isLoggedIn() {
    if(!this.user || !this.user.token) {
      return false;
    } else {
      return this.user.token.length > 0;
    }
  }

}
