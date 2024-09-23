import { Component, EventEmitter, input, output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  img = input.required<string>();
  price = input.required<number>();
  title = input.required<string>();

  addToCart = output<string>();

  addToCartHandler() {
    console.log('click from child');
    this.addToCart.emit('Message from child');
  }
}
