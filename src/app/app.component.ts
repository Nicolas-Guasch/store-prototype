import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: ` <nav class="hidden">
      <ul>
        <li>
          <a routerLink="" routerLinkActive="active">Home</a>
        </li>
        <li>
          <a routerLink="about" routerLinkActive="active">About</a>
        </li>
      </ul>
    </nav>
    <router-outlet />`,
})
export class AppComponent {
  title = 'store';
}
