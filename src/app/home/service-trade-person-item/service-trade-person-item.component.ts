import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ServicesTradesPerson } from 'src/app/models/servicestradesperson.model';
import { ServicesListComponent } from 'src/app/services-list/services-list.component';
import { ServiceTradePersonService } from 'src/app/services/data/serviceTradePerson.service';
import { IService } from './IService';


@Component({
  selector: 'app-service-trade-person-item',
  templateUrl: './service-trade-person-item.component.html',
  styleUrls: ['./service-trade-person-item.component.css']
})
export class ServiceTradePersonItemComponent implements OnInit {
  services!: ServicesTradesPerson[];

  idService:number;


  constructor(private service: ServiceTradePersonService,private router : Router) { }

  ngOnInit(): void {
    this.service.getAllServiceTradePerson('').subscribe(
      (data) => {
        this.services = data;
      }
    )

    this.service.changedListOfSTD$.subscribe((value) => {
      this.services = value;
    });
  }


  onConsult(id:number) {
 
 this.router.navigate(['/servicesDetails',id]);

  }
}
