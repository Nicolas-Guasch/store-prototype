import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../components/counter/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);
  cartTotal = computed<number>(() =>
    this.cart().reduce((sum, product) => sum + product.price, 0),
  );

  constructor() {}

  addToCart(product: Product) {
    this.cart.update((prevState) => [...prevState, product]);
  }

  removeCartItem(index: number) {
    this.cart.update((prevState) => {
      return prevState.filter((product, pos) => pos != index);
    });
  }
  clearCart() {
    this.cart.set([]);
  }
}
