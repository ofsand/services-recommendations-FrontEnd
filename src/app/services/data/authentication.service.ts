import { Injectable } from '@angular/core';
import {AUTHENTICATED_USER, TOKEN} from "../../shared/utils/app.constants";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }


  getAuthenticatedUser(): any {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken(): any {
    if (this.getAuthenticatedUser() != null) {
      return sessionStorage.getItem(TOKEN);
    }
  }


  isUserLoggedIn(): boolean {
    /*
    const user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null)
    */
    return true;
  }
}
