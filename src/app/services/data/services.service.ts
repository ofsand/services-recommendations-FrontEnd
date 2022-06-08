import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IService } from 'src/app/models/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private _tokenTest = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ6YWthcmlhIiwicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2xvZ2luIiwiZXhwIjoxNjU3MTgzNTAxfQ.LG_orwbaTyCu8Lcjx_x1LA4BRwg_5rtBkuQ7lWJFBcg"

  constructor(private http: HttpClient) { }

  addService(service: IService) {
    console.log(service)
    return this.http.post('http://localhost:8080/api/admin/category/{idCategory}/services', 
    service, {
      headers: {'Authorization': this._tokenTest}
    })
  }
}
