import { Component, Input, OnInit } from '@angular/core';
import { IService } from './IService';

@Component({
  selector: 'app-service-trade-person-item',
  templateUrl: './service-trade-person-item.component.html',
  styleUrls: ['./service-trade-person-item.component.css']
})
export class ServiceTradePersonItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() servicename:string='New Service';
  @Input() shortDescription:string='this is my new service ';
  

  services:IService[]=[
    {"serviceName":"service 1",
    "serviceDescription":"description1"},
    {"serviceName":"service 2",
    "serviceDescription":"description2"},
    {"serviceName":"service 3",
    "serviceDescription":"description3"},
    {"serviceName":"service 4",
    "serviceDescription":"description4"},
    {"serviceName":"service 5",
    "serviceDescription":"description5"},
  ];
}
