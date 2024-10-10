import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '@shared/models/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  httpClient = inject(HttpClient);

  constructor() {}

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(
      'https://api.escuelajs.co/api/v1/categories',
    );
  }
}
