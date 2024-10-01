import { Component, EventEmitter, input, output } from '@angular/core';

import { Product } from '../../../shared/components/counter/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  product = input.required<Product>();

  addToCart = output<Product>();

  addToCartHandler() {
    this.addToCart.emit(this.product());
  }

  parseDate(ISODate: string): string {
    return new Date(ISODate).toDateString().split(' ').slice(1).join(' ');
  }
}
