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
  ) { }

  public submitRegistration(user: User) {
    return this.http.post(`${env.API}/Users`, user);
  }

  public login(user: User) {
    return this.http.post(`${env.API}/Users/login`, user)
      .pipe(
        map((resp : {id: string, ttl: number, created: string}) => {
          user.token = resp.id;
          let expiration = new Date(resp.created);
          expiration = new Date(expiration.getTime() + (resp.ttl * 1000));
          user.expiration = expiration;
          user.password = null;

          this.writePersistent(user);

          return user;
        })
      );
  }

  public logout(): Observable<any> {
    if (!this.user) {
      const s = new Subject();
      s.error({ error: { error: { message: 'No user logged in' }}});
      return s.asObservable();
    }

    return this.http.post(`${env.API}/Users/logout?access_token=${this.user.token}`, null)
      .pipe(
        map(resp => {
          this.clearPersistent();
          return resp;
        })
      );
  }

  public writePersistent(user: User) {
    window.localStorage.setItem('user', JSON.stringify(user));
  }

  public clearPersistent() {
    window.localStorage.removeItem('user');
  }

  public getFromPersistency() {
    const json = window.localStorage.getItem('user');
    this.user = JSON.parse(json) as User;

    if (this.user) {
      this.user.expiration = new Date(this.user.expiration);

      if (new Date().getTime() > this.user.expiration.getTime()) {
        this.clearPersistent();
        this.user = null;
      }
    }

    return this.user;
  }
}