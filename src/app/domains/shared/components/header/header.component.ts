import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  sideMenuHidden = signal(true);

  toggleSideMenu() {
    this.sideMenuHidden.update((prevState) => !prevState);
  }
}
