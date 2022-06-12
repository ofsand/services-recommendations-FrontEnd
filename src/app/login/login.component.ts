import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/data/authentication.service";
import {User} from "../models/User.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  invalidLogin: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = new User('', '', '', '', []);
  }


  authenticate() {
    this.authenticationService.authenticate(this.user).subscribe(
      success => {
        console.log(success);
        this.router.navigate(['/admin', 'recommendations']);
        this.invalidLogin = false;
      }, error => {
        console.log(error)
        this.invalidLogin = true;
      }
    );
  }


}
