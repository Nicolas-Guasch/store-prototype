import { Component, effect, inject, input, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shared/models/product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { SanitizeService } from '@shared/services/sanitize.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  private sanitizeService = inject(SanitizeService);
  category_id? = input<string>();

  constructor() {
    effect(() => {
      const category = this.category_id!();
      if (category) {
        this.getProducts(category);
      } else this.getProducts();
    });
  }

  ngOnInit() {
    this.getCategories();
  }

  private getProducts(categoryId?: string) {
    this.productService.getProducts(categoryId).subscribe({
      next: (products) => {
        this.products.set(this.sanitizeService.fixFormat(products));
      },
      error: () => {},
    });
  }

  private getCategories() {
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.categories.set(categories);
      },
      error: () => {},
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
