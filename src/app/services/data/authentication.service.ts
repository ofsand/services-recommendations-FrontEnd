import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/User.model";
import {map} from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient
  ) { }

  authenticate(user: User) {
    return this.httpClient.post(`${environment.API_URL}/login`, {
      username: user.username,
      password: user.password
    }).pipe(
      map(
        response => {
          console.log(response);
          sessionStorage.setItem(environment.AUTHENTICATED_USER, user.username);
          // @ts-ignore
          sessionStorage.setItem(environment.TOKEN, `Bearer ${response['access token ']}`);
          return response;
        }
      )
    );
  }

  getAuthenticatedUser(): any {
    return sessionStorage.getItem(environment.AUTHENTICATED_USER);
  }

  getAuthenticatedToken(): any {
    if (this.getAuthenticatedUser() != null) {
      return sessionStorage.getItem(environment.TOKEN);
    }
  }


  isUserLoggedIn(): boolean {
    const user = sessionStorage.getItem(environment.AUTHENTICATED_USER);
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem(environment.AUTHENTICATED_USER);
    sessionStorage.removeItem(environment.TOKEN);
  }
}
