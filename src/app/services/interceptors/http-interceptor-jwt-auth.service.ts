import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../data/authentication.service";


@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorJwtAuthService implements HttpInterceptor{

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authenticatedUsername = this.authenticationService.getAuthenticatedUser();
    const token = this.authenticationService.getAuthenticatedToken();

    // const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    if (authenticatedUsername && token) {
      request = request.clone({
        setHeaders: {
          Authorization: token
        }
      })
    }

    return next.handle(request);
  }
}
