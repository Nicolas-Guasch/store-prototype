import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);

  constructor() {}

  getProducts(category_id?: string): Observable<Product[]> {
    const url = new URL('https://api.escuelajs.co/api/v1/products');
    if (category_id) {
      url.searchParams.set('categoryId', category_id);
    }
    const productEndpoint = url.toString();
    return this.http.get<Product[]>(productEndpoint);
  }

  getSingleProduct(id: string): Observable<Product> {
    const productEndpoint = `https://api.escuelajs.co/api/v1/products/${id}`;
    return this.http.get<Product>(productEndpoint);
  }
}
