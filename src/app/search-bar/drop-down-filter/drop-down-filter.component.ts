import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/data/category.service';

@Component({
  selector: 'app-drop-down-filter',
  templateUrl: './drop-down-filter.component.html',
  styleUrls: ['./drop-down-filter.component.css']
})
export class DropDownFilterComponent implements OnInit {
  categories:Category[]=[];
  categorySelected:number=1;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(
      (data) => {
        this.categories = data
      }
  )}
  onChangeCategory(event: any) {

    console.log(event.target.value)

  }
}
