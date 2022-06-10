import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http.get<Category[]>('http://localhost:8080/api/categories')
  }

  addCategorie(category: Category) {
    console.log(category)
    return this.http.post('http://localhost:8080/api/admin/categories',
      category)
  }

  updateCategory(category: Category) {
    return this.http.put(`http://localhost:8080/api/admin/category/${category.idCategory}`,
      category)
  }

  deleteCategory(idCategory: number) {
    return this.http.delete(`http://localhost:8080/api/admin/category/${idCategory}`)
  }
}
