import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  navigateLogin() {
    this.router.navigate(['/login'])
  }

  testLogin() {
    this.http.post('http://localhost:8080/api/login',{
      "username": "admin",
      "password": "admin"
  }).subscribe(
      {
        next: (data) => {
            console.log(data)
        },
        error: (error) => {
          console.log(error);
          console.log('ther is error')
        },
        complete: () => {
          console.log("completed");
          
        }
      }
    )
  }
}
