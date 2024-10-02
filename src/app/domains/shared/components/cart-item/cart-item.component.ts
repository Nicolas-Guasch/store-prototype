import { Component, input, output } from '@angular/core';
import { Product } from '../counter/models/product.model';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  index = input.required<number>();
  product = input.required<Product>();
  removeItem = output<number>();
}
