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
  
private input:string='';
  @Output() searchcriteria = new EventEmitter<String>();
  
  searchThis() {
      this.searchcriteria.emit(this.searchword)
  }

  constructor(private categoryService: CategoryService,private stradesPerson:ServiceTradePersonService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data
    })
    
  }

  onChangeCategory(event: any) {
    console.log(event.target.value)
    this.stradesPerson.findByCategory(event.target.value).subscribe((data:any) => {
      this.stradesPerson.setServiceTradePerso(data)
    })
  }

}
