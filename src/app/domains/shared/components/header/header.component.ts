import { Component, computed, input, output, signal } from '@angular/core';
import { Product } from '../counter/models/product.model';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CartItemComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  sideMenuHidden = signal(true);
  cart = input<Product[]>([]);
  removeItem = output<number>();
  clearCart = output<void>();
  cartTotal = computed<number>(() =>
    this.cart().reduce((sum, product) => sum + product.price, 0),
  );

  toggleSideMenu() {
    this.sideMenuHidden.update((prevState) => !prevState);
  }
}
