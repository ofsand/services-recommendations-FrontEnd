import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITradePerson } from 'src/app/models/tradeperson';
import { IService } from 'src/app/models/service.model';
import { ServicesTradesPerson } from 'src/app/models/servicestradesperson.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TradePersonService {

  constructor(private http: HttpClient) { }


  addTradeperson(tradeperson: ITradePerson, idCategory : number) {
    console.log(tradeperson)
    this.http.post(`${environment.ADMIN_API_URL}/category/${idCategory}/tradesPerson`, tradeperson).subscribe(res => {
      console.log("Service added");
    });
  }

  findTradePersonById(id:number){
    return this.http.get(`${environment.API_URL}/tradePerson/${id}`)
  }
}
