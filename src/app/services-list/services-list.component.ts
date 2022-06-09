import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {

  idService:number;
  constructor(private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
   this.idService=this.activeRoute.snapshot.params['id'];
   this.getSercicesDetailsById();
  }
  getSercicesDetailsById(){

  }

}
