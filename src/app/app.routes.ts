import { Routes } from '@angular/router';

import { ListComponent } from './domains/products/pages/list/list.component';
import { ProductDetailsComponent } from '@products/pages/product-details/product-details.component';
import { AboutComponent } from './domains/info/pages/about/about.component';
import { NotFoundComponent } from '@info/pages/not-found/not-found.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'product/:id',
        component: ProductDetailsComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        component: ListComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
