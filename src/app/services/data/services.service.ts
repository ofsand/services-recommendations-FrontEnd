import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IService } from 'src/app/models/service.model';
import { ServicesTradesPerson } from 'src/app/models/servicestradesperson.model';
import { ITradePerson } from 'src/app/models/tradeperson';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private _tokenTest = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbIlJPTEVfQURNSU4iXSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9sb2dpbiIsImV4cCI6MTY1NzM3MjA5M30.f_4H4r6oLqOVE0D2yD-TDtyA5KZJqkDYR3o0Z51MHPc"
  url="http://localhost:8080/api/";

  constructor(private http: HttpClient) { }
  
  addService(service: IService, idCategory : number) {
    console.log(service)
    return this.http.post(this.url+"admin/category/"+idCategory+"/services", service, {
      headers: {'Authorization': this._tokenTest}
    })

  }

  addTradeperson(tradeperson: ITradePerson, idCategory : number) {
    console.log(tradeperson)
    return this.http.post(this.url+"admin/category/"+idCategory+"/tradesPerson", tradeperson, {
      headers: {'Authorization': this._tokenTest}
    })

  }

  getAllServicesTradesPerson() {
    return this.http.get<ServicesTradesPerson[]>(this.url+'services-tradesPerson')
  }

  deleteServiceTradePerson(idServiceTradePerson: number) {
    return this.http.delete(this.url+"admin/services-tradesPerson/"+idServiceTradePerson, {
      headers: {'Authorization':  this._tokenTest}
    })
  }
  
}
