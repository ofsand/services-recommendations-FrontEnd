import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ServicesTradesPerson } from 'src/app/models/servicestradesperson.model';
import { ServicesListComponent } from 'src/app/services-list/services-list.component';
import { ServiceTradePersonService } from 'src/app/services/data/serviceTradePerson.service';
import { IService } from './IService';
import {Router} from "@angular/router";


@Component({
  selector: 'app-service-trade-person-item',
  templateUrl: './service-trade-person-item.component.html',
  styleUrls: ['./service-trade-person-item.component.css']
})
export class ServiceTradePersonItemComponent implements OnInit {
  services!: ServicesTradesPerson[];



  constructor(
    private service: ServiceTradePersonService,
    private router: Router
  ) { }

  ngOnInit(): void {
     this.service.getAllServiceTradePerson('').subscribe(
     (data) => {
       console.log(data);
        this.services =data;
    })
    this.service.changedListOfSTD$.subscribe((value) => {
      this.services = value;
    });
  }

  showServiceTradesPerson(serviceTradesPersonType: string, serviceTradesPersonId: number) {
    if (serviceTradesPersonType == 'ServiceDto') {
      this.router.navigate(['services', serviceTradesPersonId]);
    } else {
      this.router.navigate(['trades-persons', serviceTradesPersonId]);
    }
  }



}
