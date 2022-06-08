import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { ServicesTradesPerson } from '../models/servicestradesperson.model';
import { CategoryService } from '../services/data/category.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  servicesTradesPerson!: ServicesTradesPerson[];
  categories!: Category[]
  searchKeyword!: string;
  filterCategory!: string;
  typeService: string = 'all';

  constructor(private http: HttpClient, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.http.get<ServicesTradesPerson[]>('http://localhost:8080/api/services-tradesPerson').subscribe(
      (data) => {
        this.servicesTradesPerson=data
      }
    )
    this.categoryService.getAllCategories().subscribe(
      data => {
        this.categories = data
      }
    )
  }

  onChangeCategory(event: any) {
    this.http.get<ServicesTradesPerson[]>(`http://localhost:8080/api/category/${event.target.value}/services-tradesPerson`).subscribe(
      (data) => {
        this.servicesTradesPerson=data
      }
    )
    console.log(event.target.value)
  }

}
