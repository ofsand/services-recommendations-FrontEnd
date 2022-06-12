import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IService } from 'src/app/models/service.model';
import { ServicesService } from 'src/app/services/data/services.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {

  idService:number;
  serviceItem:IService;
  constructor(private activeRoute:ActivatedRoute,private service:ServicesService) { }

  ngOnInit(): void {
    this.idService=this.activeRoute.snapshot.params['id'];
    console.log(this.idService);
    this.getSercicesDetailsById();
  }
  getSercicesDetailsById(){
    this.service.findServiceById(this.idService).subscribe((response:any) => {
      this.serviceItem = response;
      
      console.log(this.serviceItem);
  });
      }

}
