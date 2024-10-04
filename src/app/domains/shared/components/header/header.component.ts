import { Component, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartItemComponent } from '@shared/components/cart-item/cart-item.component';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CartItemComponent, RouterLink, RouterLinkActive, CurrencyPipe],
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
