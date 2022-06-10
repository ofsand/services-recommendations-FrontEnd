import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IService } from 'src/app/models/service.model';
import { ServicesTradesPerson } from 'src/app/models/servicestradesperson.model';
import { ITradePerson } from 'src/app/models/tradeperson';

@Injectable({
  providedIn: 'root'
})
export class TradePersonService {
  private _tokenTest = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbIlJPTEVfQURNSU4iXSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9sb2dpbiIsImV4cCI6MTY1NzM3MjA5M30.f_4H4r6oLqOVE0D2yD-TDtyA5KZJqkDYR3o0Z51MHPc"
  url="http://localhost:8080/api/";


  constructor(private http: HttpClient) { }
  
  

  addTradeperson(tradeperson: ITradePerson, idCategory : number) {
    console.log(tradeperson)
    this.http.post(this.url+"admin/category/"+idCategory+"/tradesPerson", tradeperson, {
      headers: {'Authorization': this._tokenTest}
    }).subscribe(res => {
      console.log("Service added");
    });
  }

  findTradePersonById(id:number){
    return this.http.get(this.url+"/tradePerson/"+id)

  }
}
