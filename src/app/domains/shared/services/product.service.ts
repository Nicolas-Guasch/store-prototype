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

  getProducts(): Observable<Product[]> {
    const productEndpoint = 'https://api.escuelajs.co/api/v1/products';
    return this.http.get<Product[]>(productEndpoint);
  }

  getSingleProduct(id: string): Observable<Product> {
    const productEndpoint = `https://api.escuelajs.co/api/v1/products/${id}`;
    return this.http.get<Product>(productEndpoint);
  }
}
