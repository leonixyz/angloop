import { AuthenticationService } from '../services/authentication.service';
import { HttpHandler } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';

@Injectable()
export class LoopbackInterceptor implements HttpInterceptor {

  constructor(
    private authn: AuthenticationService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authn.getFromPersistency() && this.authn.isLoggedIn()) {
      if (req.url.startsWith(env.API)) {
        const token = this.authn.getFromPersistency().token;
        req = req.clone({
            setParams: {
              'access_token': token
            }
          }
        );
      }
    }

    return next.handle(req);
  }

}