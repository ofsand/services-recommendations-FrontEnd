import { Component, Input, OnInit } from '@angular/core';
import { ServicesTradesPerson } from 'src/app/models/servicestradesperson.model';
import { ServiceTradePersonService } from 'src/app/services/data/serviceTradePerson.service';
import { IService } from './IService';


@Component({
  selector: 'app-service-trade-person-item',
  templateUrl: './service-trade-person-item.component.html',
  styleUrls: ['./service-trade-person-item.component.css']
})
export class ServiceTradePersonItemComponent implements OnInit {
  services:ServicesTradesPerson[]=[];
  @Input() servicename:string='New Service';
  @Input() shortDescription:string='this is my new service ';
  
  constructor(private service: ServiceTradePersonService) { }

  ngOnInit(): void {
    this.service.getAllServiceTradePerson().subscribe(
      (data) => {
        this.services =data;
      }
    )
  }
 

 
}
