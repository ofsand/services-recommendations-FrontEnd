import { Injectable } from '@angular/core';
import {API_URL, AUTHENTICATED_USER, TOKEN} from "../../shared/utils/app.constants";
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/User.model";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient
  ) { }

  authenticate(user: User) {
    return this.httpClient.post(`${API_URL}/login`, {
      username: user.username,
      password: user.password
    }).pipe(
      map(
        response => {
          console.log(response);
          sessionStorage.setItem(AUTHENTICATED_USER, user.username);
          // @ts-ignore
          sessionStorage.setItem(TOKEN, `Bearer ${response['access token ']}`);
          return response;
        }
      )
    );
  }

  getAuthenticatedUser(): any {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken(): any {
    if (this.getAuthenticatedUser() != null) {
      return sessionStorage.getItem(TOKEN);
    }
  }


  isUserLoggedIn(): boolean {
    const user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}
