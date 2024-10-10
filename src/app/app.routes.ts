import { Routes } from '@angular/router';
import { LayoutComponent } from '@shared/components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'about',
        loadComponent: () => import('@info/pages/about/about.component'),
      },
      {
        path: 'product/:id',
        loadComponent: () =>
          import('@products/pages/product-details/product-details.component'),
      },
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('@products/pages/list/list.component'),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () => import('@info/pages/not-found/not-found.component'),
  },
];
