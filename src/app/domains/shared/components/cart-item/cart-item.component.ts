import { Component, inject, input } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';

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
  private cartService = inject(CartService);

  removeItem(index: number): void {
    this.cartService.removeCartItem(index);
  }
}
