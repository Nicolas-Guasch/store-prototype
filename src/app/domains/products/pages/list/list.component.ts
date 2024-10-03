import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';

import { Product } from '../../../shared/components/counter/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products = signal<Product[]>([]);
  private cartService = inject(CartService);

  constructor() {
    const templateProduct: Product = {
      id: Date.now(),
      title: 'Product',
      price: 100,
      image: 'https://picsum.photos/640/640?r=',
      publishedOn: new Date().toISOString(),
    };
    let test = new Date(templateProduct.publishedOn);
    console.log(test.toDateString());

    const defaultAmount = 12;
    let defaultProducts: Product[] = [];
    for (let i = 1; i <= defaultAmount; i++) {
      defaultProducts.push({
        id: templateProduct.id + i,
        title: templateProduct.title + ' ' + i,
        price: Math.trunc(Math.random() * 1000),
        image: templateProduct.image + i,
        publishedOn: new Date().toISOString(),
      });
    }

    this.products.set(defaultProducts);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
