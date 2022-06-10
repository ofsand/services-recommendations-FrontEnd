import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IService } from 'src/app/models/service.model';
import { ServicesTradesPerson } from 'src/app/models/servicestradesperson.model';
import { ITradePerson } from 'src/app/models/tradeperson';
import {ADMIN_API_URL, API_URL} from "../../shared/utils/app.constants";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  addService(service: IService, idCategory : number) {
    console.log(service)
    return this.http.post(`${ADMIN_API_URL}/category/${idCategory}/services`, service);
  }

  addTradeperson(tradeperson: ITradePerson, idCategory : number) {
    console.log(tradeperson)
    return this.http.post(`${ADMIN_API_URL}/category/${idCategory}/tradesPerson`, tradeperson);
  }

  getAllServicesTradesPerson() {
    return this.http.get<ServicesTradesPerson[]>(`${API_URL}/services-tradesPerson`)
  }

  deleteServiceTradePerson(idServiceTradePerson: number) {
    return this.http.delete(`${ADMIN_API_URL}/services-tradesPerson/${idServiceTradePerson}`)
  }

  findServiceTradePersonById(idServiceTradePerson: number) {
    return this.http.get(`${API_URL}/serviceTradePerson/${idServiceTradePerson}`)
  }

  findServiceById(id:number){
    return this.http.get(`${API_URL}/service-details/${id}`)

  }
  findTradePersonById(id:number){
    return this.http.get(`${API_URL}/tradeperson-details/${id}`)
  }
}
