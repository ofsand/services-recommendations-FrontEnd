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

   keyword:string='';

  constructor(private categoryService: CategoryService,private stradesPerson:ServiceTradePersonService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data
    })
    
  }




  onChangeCategory(event: any) {
    console.log(event.target.value)
    console.log(event.target.name)

console.log(this.keyword)
    if(event.target.name==="categorySelected"){
      this.idCategorySelected=event.target.value;
    }
    else if(event.target.name==="typeService"){
      this.serviceTradesPersonSelected=event.target.value;
    }

    
    if(this.idCategorySelected==0) {

    if( this.serviceTradesPersonSelected==1){
      this.stradesPerson.getAllServiceTradePerson(this.keyword).subscribe((data:any)=>{
        this.stradesPerson.setServiceList(data)
      })}
      else if(this.serviceTradesPersonSelected==2){
        this.stradesPerson.getAllService(this.keyword).subscribe((data:any) => {
          this.stradesPerson.setServiceList(data)
        })
      }
      else if(this.serviceTradesPersonSelected==3){
        this.stradesPerson.getAllTradePerson(this.keyword).subscribe((data:any) => {
          this.stradesPerson.setServiceList(data)
        })
      }

    }
    else{
      if(this.serviceTradesPersonSelected==1){
        this.stradesPerson.findByCategory(this.idCategorySelected,this.keyword).subscribe((data:any)=>{
          this.stradesPerson.setServiceList(data)
      })
      }
      else if(this.serviceTradesPersonSelected==2){
        this.stradesPerson.getAllServiceByCategory(this.idCategorySelected,this.keyword).subscribe((data:any)=>{
          this.stradesPerson.setServiceList(data)
      })
      }
      else if(this.serviceTradesPersonSelected==3){
        this.stradesPerson.getAllTradePersonByCategory(this.idCategorySelected,this.keyword).subscribe((data:any)=>{
          this.stradesPerson.setServiceList(data)
            })
      }


    }
    
   


  
  }
/*

 onChangeCategory(event: any) {
    console.log(event.target.value)
    console.log(event.target.name)
    this.idCategorySelected=event.target.value;
    if(this.idCategorySelected==0){
      this.stradesPerson.getAllServiceTradePerson().subscribe((data:any)=>{
        this.stradesPerson.setServiceList(data)
      })
    }else{
    this.stradesPerson.findByCategory(event.target.value).subscribe((data:any) => {
      this.stradesPerson.setServiceList(data)
    })
  }
  }


  changeList(event: any) {
         
    
    if(event.target.value==1 && this.idCategorySelected==0){
      this.stradesPerson.getAllServiceTradePerson().subscribe((data:any)=>{
        this.stradesPerson.setServiceList(data)
      })
    }
    else if(event.target.value==1 && this.idCategorySelected!=0){
      this.stradesPerson.findByCategory(event.target.value).subscribe((data:any) => {
        this.stradesPerson.setServiceList(data)
      })
    }
   if(event.target.value==1){
      this.stradesPerson.getAllServiceTradePerson().subscribe((data:any)=>{
        this.stradesPerson.setServiceList(data)
      })
   }
    if(event.target.value==2){
      this.stradesPerson.getAllServiceByCategory(this.idCategorySelected,).subscribe((data:any)=>{
          this.stradesPerson.setServiceList(data)
      })
    }
     if(event.target.value==3){
      this.stradesPerson.getAllTradePersonByCategory(this.idCategorySelected).subscribe((data:any)=>{
    this.stradesPerson.setServiceList(data)
      })
    }
  }
  */
}
