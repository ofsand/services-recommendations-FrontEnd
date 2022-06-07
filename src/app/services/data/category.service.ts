import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private _tokenTest = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ6YWthcmlhIiwicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2xvZ2luIiwiZXhwIjoxNjU3MTgzNTAxfQ.LG_orwbaTyCu8Lcjx_x1LA4BRwg_5rtBkuQ7lWJFBcg"

  constructor(private http: HttpClient) { }
  
  getAllCategories() {
    return this.http.get<Category[]>('http://localhost:8080/api/categories')
  }

  addCategorie(category: Category) {
    console.log(category)
    return this.http.post('http://localhost:8080/api/admin/categories', 
      category, {
      headers: {'Authorization': this._tokenTest}
    })
  }

  updateCategory(category: Category) {
    return this.http.put(`http://localhost:8080/api/admin/category/${category.idCategory}`, 
      category, {
        headers: {'Authorization':  this._tokenTest}
      })
  }

  deleteCategory(idCategory: number) {
    return this.http.delete(`http://localhost:8080/api/admin/category/${idCategory}`, {
      headers: {'Authorization':  this._tokenTest}
    })
  }
}
