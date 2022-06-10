import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { ServicesTradesPerson } from 'src/app/models/servicestradesperson.model';
import {API_URL} from "../../shared/utils/app.constants";


@Injectable({
  providedIn: 'root'
})
export class ServiceTradePersonService {

  private services$= new BehaviorSubject<any>({});

  changedListOfSTD$=this.services$.asObservable();

  setServiceList(serviceTP: any) {
    this.services$.next(serviceTP);
  }

  constructor(private http: HttpClient) { }

  getAllServiceTradePerson(keyword:string) {
    return this.http.get<ServicesTradesPerson[]>(`${API_URL}/services-tradesPerson?keyword=${keyword}`)
  }
  getAllTradePersonByCategory(idCategory:number,keyword:string) {
    return this.http.get<ServicesTradesPerson[]>(`${API_URL}/tradesPerson/${idCategory}?keyword=${keyword}`)
  }
  getAllServiceByCategory(idCategory:number,keyword:string) {
    return this.http.get<ServicesTradesPerson[]>(`${API_URL}/services/${idCategory}?keyword=${keyword}`)
  }

  getAllTradePerson(keyword:string) {
    return this.http.get<ServicesTradesPerson[]>(`${API_URL}/search/tradesPerson?keyword=${keyword}`)
  }
  getAllService(keyword:string) {
    return this.http.get<ServicesTradesPerson[]>(`${API_URL}/search/services?keyword=${keyword}`)
  }

  findByCategory(idCategory: number,keyword:string) {
    return this.http.get(`${API_URL}/category/${idCategory}/services-tradesPerson?keyword=${keyword}`, {
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
