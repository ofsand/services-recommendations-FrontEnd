import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITradePerson } from 'src/app/models/tradeperson';
import {ADMIN_API_URL, API_URL} from "../../shared/utils/app.constants";
import { IService } from 'src/app/models/service.model';
import { ServicesTradesPerson } from 'src/app/models/servicestradesperson.model';
@Injectable({
  providedIn: 'root'
})
export class TradePersonService {

  constructor(private http: HttpClient) { }


  addTradeperson(tradeperson: ITradePerson, idCategory : number) {
    console.log(tradeperson)
    this.http.post(`${ADMIN_API_URL}/category/${idCategory}/tradesPerson`, tradeperson).subscribe(res => {
      console.log("Service added");
    });
  }

  findTradePersonById(id:number){
    return this.http.get(`${API_URL}/tradePerson/${id}`)
  }
}
