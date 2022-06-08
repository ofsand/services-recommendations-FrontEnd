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
 idCategorySelected!:number;

  constructor(private categoryService: CategoryService,private stradesPerson:ServiceTradePersonService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data
    })
    
  }


  onChangeCategory(event: any) {
    console.log(event.target.value)
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
    
    if(event.target.value==1){
      this.stradesPerson.getAllServiceTradePerson().subscribe((data:any)=>{
        this.stradesPerson.setServiceList(data)
      })
    }
    else if(event.target.value==2){
      this.stradesPerson.getAllService(this.idCategorySelected).subscribe((data:any)=>{
    this.stradesPerson.setServiceList(data)
      })
    }
    else if(event.target.value==3){
      this.stradesPerson.getAllTradePerson(this.idCategorySelected).subscribe((data:any)=>{
    this.stradesPerson.setServiceList(data)
      })
    }
  }
}
