import { Component, inject, signal } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CartItemComponent, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  sideMenuHidden = signal(true);

  private cartService = inject(CartService);
  cart = this.cartService.cart;
  cartTotal = this.cartService.cartTotal;

  toggleSideMenu() {
    this.sideMenuHidden.update((prevState) => !prevState);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
