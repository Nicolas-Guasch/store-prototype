import { Component, effect, inject, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';

import { Product } from '@shared/models/product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

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
  private productService = inject(ProductService);

  constructor() {
    effect(
      () => {
        const products = this.products();
        console.log(products);
        if (products.length >= 3) {
          this.addToCart(products[0]);
          this.addToCart(products[1]);
          this.addToCart(products[2]);
        }
      },
      { allowSignalWrites: true },
    );
  }

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: () => {},
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
