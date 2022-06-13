import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/data/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories!: Category[];
  formCategory!: FormGroup;
  editMode: boolean = false

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.formCategory = new FormGroup({
      'idCategory': new FormControl(null),
      'name': new FormControl(null, Validators.required)
    })
    this.categoryService.getAllCategories().subscribe(
      (data) => {
        this.categories = data
      }
    )
  }
  
  onEdit(category: Category) {
    this.editMode = true;
    this.formCategory.setValue({
      'idCategory': category.idCategory,
      'name': category.name
    })
  }

  onSubmit() {
    if(this.editMode) {
      this.categoryService.updateCategory(this.formCategory.value).subscribe(
        (data: any) => {
          this.categories = this.categories.filter(category => (category.idCategory !== data.idCategory))
          this.categories.push(data)
        }
      )
    }
    else {
      this.categoryService.addCategorie(this.formCategory.value).subscribe(
        (data: any) => {
          this.categories.push(data)
        }
      )
    }
    this.formCategory.reset()
    this.editMode = false;
  }

  onDeleteCategory(idCategory: number) {
    this.categoryService.deleteCategory(idCategory).subscribe(
      data => {
        this.categories = 
          this.categories.filter((category: Category) => category.idCategory !== idCategory)
      }
    )
  }

  onClear() {
    this.formCategory.reset()
    this.editMode = false
  }
}