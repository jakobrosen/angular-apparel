import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/products/all', pathMatch: 'full' },
  { path: 'products/:gender', loadComponent: () => import('./components/products/products').then(m => m.Products) },
  { path: '**', redirectTo: '/products/all' },
];
