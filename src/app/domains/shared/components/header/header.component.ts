import { Component, input, signal } from '@angular/core';
import { Product } from '../counter/models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  sideMenuHidden = signal(true);
  cart = input<Product[]>([]);

  toggleSideMenu() {
    this.sideMenuHidden.update((prevState) => !prevState);
  }
}
