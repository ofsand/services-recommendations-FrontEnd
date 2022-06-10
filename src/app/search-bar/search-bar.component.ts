import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceTradePersonItemComponent } from '../home/service-trade-person-item/service-trade-person-item.component';
import { Category } from '../models/category.model';
import { ServicesTradesPerson } from '../models/servicestradesperson.model';
import { CategoryService } from '../services/data/category.service';
import { ServiceTradePersonService } from '../services/data/serviceTradePerson.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input() searchword:string='';
  categories!: Category[];
  idCategorySelected:number=0;
  serviceTradesPersonSelected:number=1;
  private _keyword:string='';
  isLoading: boolean = false

  constructor(private categoryService: CategoryService,private stradesPerson:ServiceTradePersonService) { }

  ngOnInit(): void {
    this.isLoading = true
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data
      this.isLoading = false
    })
  }

 
  set keyword(keyword: string) {
    this._keyword = keyword;
    this.onChangeCategory(null)
  }



  onChangeCategory(event: any) {
    
    this.isLoading = true

    if(event !== null) {
      if(event.target.name==="categorySelected"){
        this.idCategorySelected=event.target.value;
      }
      else if(event.target.name==="typeService"){
        this.serviceTradesPersonSelected=event.target.value;
      }
    }
   

    
    if(this.idCategorySelected==0) {

      if( this.serviceTradesPersonSelected==1){
      this.stradesPerson.getAllServiceTradePerson(this._keyword).subscribe((data:any)=>{
        this.stradesPerson.setServiceList(data)
      })}

      else if(this.serviceTradesPersonSelected==2){
        this.stradesPerson.getAllService(this._keyword).subscribe((data:any) => {
          this.stradesPerson.setServiceList(data)
        })
      }
      else if(this.serviceTradesPersonSelected==3){
        this.stradesPerson.getAllTradePerson(this._keyword).subscribe((data:any) => {
          this.stradesPerson.setServiceList(data)
        })
      }

    }
    else{
      if(this.serviceTradesPersonSelected==1){
        this.stradesPerson.findByCategory(this.idCategorySelected,this._keyword).subscribe((data:any)=>{
          this.stradesPerson.setServiceList(data)
      })
      }
      else if(this.serviceTradesPersonSelected==2){
        this.stradesPerson.getAllServiceByCategory(this.idCategorySelected,this._keyword).subscribe((data:any)=>{
          this.stradesPerson.setServiceList(data)
      })
      }
      else if(this.serviceTradesPersonSelected==3){
        this.stradesPerson.getAllTradePersonByCategory(this.idCategorySelected,this._keyword).subscribe((data:any)=>{
          this.stradesPerson.setServiceList(data)
        })
      }


    }
    this.isLoading = false
  }
}
