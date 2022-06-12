import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ServicesTradesPerson } from 'src/app/models/servicestradesperson.model';
import { ServicesListComponent } from 'src/app/services-list/services-list.component';
import { ServiceTradePersonService } from 'src/app/services/data/serviceTradePerson.service';
import { IService } from '../../models/IService';


@Component({
  selector: 'app-home-services-trades-person',
  templateUrl: './home-services-trades-person.component.html',
  styleUrls: ['./home-services-trades-person.component.css']
})
export class HomeServiceTradePersonItemComponent implements OnInit {
  services!: ServicesTradesPerson[];

  idService:number;


  constructor(
    private service: ServiceTradePersonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getAllServiceTradePerson('').subscribe(
     (data) => {
        console.log(data);
        this.services = data;
      }
    )
    this.service.changedListOfSTD$.subscribe((value) => {
      this.services = value;
    });
  }

  onConsult(id:number, type : string) {

    if (type === "ServiceDto") {
      this.router.navigate(['/service-details', id]);
    } 
    else if (type === "TradesPersonDto")
      this.router.navigate(['/tradeperson-details', id]);
    }
}
