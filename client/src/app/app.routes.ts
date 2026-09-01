import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/products/all', pathMatch: 'full' },
  { path: 'products/:gender', loadComponent: () => import('./products/products.component').then(m => m.ProductsComponent) },
  { path: '**', redirectTo: '/products/all' },
];
