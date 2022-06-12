import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http.get<Category[]>(`${environment.API_URL}/categories`);
  }

  addCategorie(category: Category) {
    console.log(category)
    return this.http.post(`${environment.ADMIN_API_URL}/categories`,
      category)
  }

  updateCategory(category: Category) {
    return this.http.put(`${environment.ADMIN_API_URL}/category/${category.idCategory}`,
      category)
  }

  deleteCategory(idCategory: number) {
    return this.http.delete(`${environment.ADMIN_API_URL}/category/${idCategory}`)
  }
}
