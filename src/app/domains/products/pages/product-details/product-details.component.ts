import { Component, inject, input, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';
import { CartService } from '@shared/services/cart.service';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe, UpperCasePipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export default class ProductDetailsComponent {
  id? = input<string>();
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  product = signal<Product | null>(null);
  cover = signal<string>('');

  ngOnInit() {
    if (this.id) {
      this.productService.getSingleProduct(this.id()!).subscribe({
        next: (product) => {
          this.product.set(product);
          if (product.images.length > 0) {
            this.cover.set(product.images[0]);
          }
        },
      });
    }
  }

  changeCover(newImage: string) {
    this.cover.set(newImage);
  }

  addToCart() {
    if (this.product()) {
      this.cartService.addToCart(this.product()!);
    }
  }
}
