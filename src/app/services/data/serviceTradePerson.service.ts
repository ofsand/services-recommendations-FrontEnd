import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { ServicesTradesPerson } from 'src/app/models/servicestradesperson.model';


@Injectable({
  providedIn: 'root'
})
export class ServiceTradePersonService {
  private _tokenTest = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbIlJPTEVfQURNSU4iXSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9sb2dpbiIsImV4cCI6MTY1NzIwMjQ3Nn0.GWiNhs6-N3zJrMm81OCc62cKWAcJTdH3vf52gFcDX9M"

  private services$= new BehaviorSubject<any>({});

  changedListOfSTD$=this.services$.asObservable();
  
  setServiceList(serviceTP: any) {
    this.services$.next(serviceTP);
  }
  


  constructor(private http: HttpClient) { }
  

  getAllServiceTradePerson(keyword:string) {
    return this.http.get<ServicesTradesPerson[]>(`http://localhost:8080/api/services-tradesPerson?keyword=${keyword}`)
  }
  getAllTradePersonByCategory(idCategory:number,keyword:string) {
    return this.http.get<ServicesTradesPerson[]>(`http://localhost:8080/api/tradesPerson/${idCategory}?keyword=${keyword}`)
  }
  getAllServiceByCategory(idCategory:number,keyword:string) {
    return this.http.get<ServicesTradesPerson[]>(`http://localhost:8080/api/services/${idCategory}?keyword=${keyword}`)
  }

  getAllTradePerson(keyword:string) {
    return this.http.get<ServicesTradesPerson[]>(`http://localhost:8080/api/search/tradesPerson?keyword=${keyword}`)
  }
  getAllService(keyword:string) {
    return this.http.get<ServicesTradesPerson[]>(`http://localhost:8080/api/search/services?keyword=${keyword}`)
  }

  findByCategory(idCategory: number,keyword:string) {
    return this.http.get(`http://localhost:8080/api/category/${idCategory}/services-tradesPerson?keyword=${keyword}`, {
      
    })
  }

  updateListOfServicesTradePerson(idCategory:number,keyword:string){
    this.findByCategory(idCategory,keyword).subscribe(
      (data:ServicesTradesPerson[]|any) => {
        this.services$ =data;
      }
    )
    
  }

}
