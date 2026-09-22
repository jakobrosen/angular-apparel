import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home') },
  { path: 'products', loadComponent: () => import('./pages/products/products') },
  // Sluggen innehåller både namn och id, t.ex. "classic-cotton-shirt-42".
  {
    path: 'products/:slug',
    loadComponent: () => import('./pages/product-details/product-details'),
  },
  { path: 'admin/products', loadComponent: () => import('./pages/admin-products/admin-products') },
  {
    path: 'admin/products/new',
    loadComponent: () => import('./pages/admin-products-new/admin-products-new'),
  },
  { path: '**', redirectTo: '' },
];
