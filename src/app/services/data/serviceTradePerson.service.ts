import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { ServicesTradesPerson } from 'src/app/models/servicestradesperson.model';


@Injectable({
  providedIn: 'root'
})
export class ServiceTradePersonService {
  private _tokenTest = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbIlJPTEVfQURNSU4iXSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9sb2dpbiIsImV4cCI6MTY1NzIwMjQ3Nn0.GWiNhs6-N3zJrMm81OCc62cKWAcJTdH3vf52gFcDX9M"

  servicesList=new Subject<ServicesTradesPerson[]>();
  

  constructor(private http: HttpClient) { }
  
  setServiceTradePerso( service:ServicesTradesPerson[]){
    this.servicesList.next(service)
  }

  getAllServiceTradePerson() {
    return this.http.get<ServicesTradesPerson[]>('http://localhost:8080/api/services-tradesPerson')
  }

  findByCategory(idCategory: number) {
    return this.http.get(`http://localhost:8080/api/category/${idCategory}/services-tradesPerson`, {
      
    })
  }

  updateListOfServicesTradePerson(idCategory:number){
    this.findByCategory(idCategory).subscribe(
      (data:ServicesTradesPerson[]|any) => {
        this.servicesList =data;
      }
    )
  }

}
