import { Component, computed, input, output } from '@angular/core';
import { UpperCasePipe, CurrencyPipe, DatePipe } from '@angular/common';

import { Product } from '@shared/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [UpperCasePipe, CurrencyPipe, DatePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  product = input.required<Product>();
  addToCart = output<Product>();

  addToCartHandler() {
    this.addToCart.emit(this.product());
  }
}
