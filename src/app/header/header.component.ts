import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/data/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['']);
  }

  login() {
    this.router.navigate(['login']);
  }

}
