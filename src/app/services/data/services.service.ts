import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IService } from 'src/app/models/service.model';
import { ServicesTradesPerson } from 'src/app/models/servicestradesperson.model';
import { ITradePerson } from 'src/app/models/tradeperson';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private _tokenTest = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ6YWthcmlhIiwicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2xvZ2luIiwiZXhwIjoxNjU3MjkzNzkxfQ.Vabglh6fpu8oAmaxJJLc6MeS_HHJXHjEYACyvCTZzXA"
  url="http://localhost:8080/api/";


  constructor(private http: HttpClient) { }
  
  addService(service: IService, idCategory : number) {
    console.log(service)
    this.http.post(this.url+"admin/category/"+idCategory+"/services", service, {
      headers: {'Authorization': this._tokenTest}
    }).subscribe(res => {
      console.log("Service added");
    });
  }

  addTradeperson(tradeperson: ITradePerson, idCategory : number) {
    console.log(tradeperson)
    this.http.post(this.url+"admin/category/"+idCategory+"/tradesPerson", tradeperson, {
      headers: {'Authorization': this._tokenTest}
    }).subscribe(res => {
      console.log("Service added");
    });
  }

  getAllServicesTradesPerson() {
    return this.http.get<ServicesTradesPerson[]>(this.url+'services-tradesPerson')
  }
}
