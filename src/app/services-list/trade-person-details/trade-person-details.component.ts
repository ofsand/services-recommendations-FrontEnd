import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITradePerson } from 'src/app/models/tradeperson';
import { ServicesService } from 'src/app/services/data/services.service';

@Component({
  selector: 'app-trade-person-details',
  templateUrl: './trade-person-details.component.html',
  styleUrls: ['./trade-person-details.component.css']
})
export class TradePersonDetailsComponent implements OnInit {


  idService:number;
  tradePersonItem:ITradePerson;
  constructor(private activeRoute:ActivatedRoute,private service:ServicesService) { }

  ngOnInit(): void {
    this.idService=this.activeRoute.snapshot.params['id'];
    console.log(this.idService);
    this.getTradePersonDetailsById();
  }
  getTradePersonDetailsById(){
    this.service.findTradePersonById(this.idService).subscribe((response:any) => {
      this.tradePersonItem = response;
      
      console.log(this.tradePersonItem);
  });
      }

}
