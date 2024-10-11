import {
  Component,
  effect,
  inject,
  Injector,
  input,
  runInInjectionContext,
  Signal,
  signal,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shared/models/product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { SanitizeService } from '@shared/services/sanitize.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export default class ListComponent {
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  private sanitizeService = inject(SanitizeService);
  category_id? = input<string>();
  products!: Signal<Product[]>;
  categories: Signal<Category[]> = toSignal(this.getCategories()) as Signal<
    Category[]
  >;

  constructor(private injector: Injector) {}

  ngOnInit() {}

  ngOnChanges() {
    runInInjectionContext(this.injector, () => {
      this.products = (
        this.category_id
          ? toSignal(this.getProducts(this.category_id()))
          : toSignal(this.getProducts())
      ) as Signal<Product[]>;
    });
  }

  private getProducts(categoryId?: string): Observable<Product[]> {
    console.log(categoryId);
    return this.productService.getProducts(categoryId);
  }

  private getCategories(): Observable<Category[]> {
    return this.categoryService.getCategories();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
