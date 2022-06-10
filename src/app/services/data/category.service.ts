import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import {ADMIN_API_URL, API_URL} from "../../shared/utils/app.constants";


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private _tokenTest = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ6YWthcmlhIiwicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2xvZ2luIiwiZXhwIjoxNjU3MTgzNTAxfQ.LG_orwbaTyCu8Lcjx_x1LA4BRwg_5rtBkuQ7lWJFBcg"

  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http.get<Category[]>(`${API_URL}/categories`);
  }

  addCategorie(category: Category) {
    console.log(category)
    return this.http.post(`${ADMIN_API_URL}/categories`,
      category)
  }

  updateCategory(category: Category) {
    return this.http.put(`${ADMIN_API_URL}/category/${category.idCategory}`,
      category)
  }

  deleteCategory(idCategory: number) {
    return this.http.delete(`${ADMIN_API_URL}/category/${idCategory}`)
  }
}
