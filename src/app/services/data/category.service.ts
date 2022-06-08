import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private _tokenTest = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbIlJPTEVfQURNSU4iXSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9sb2dpbiIsImV4cCI6MTY1NzIwMjQ3Nn0.GWiNhs6-N3zJrMm81OCc62cKWAcJTdH3vf52gFcDX9M"

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
