import { Routes } from '@angular/router';
import { authGuard } from './guards/auth';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home') },
  { path: 'products', loadComponent: () => import('./pages/products/products') },
  {
    path: 'products/:slug',
    loadComponent: () => import('./pages/product-details/product-details'),
  },
  { path: 'checkout', loadComponent: () => import('./pages/checkout/checkout') },
  { path: 'admin/login', loadComponent: () => import('./pages/admin-login/admin-login') },
  {
    path: 'admin/products',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/admin-products/admin-products'),
  },
  {
    path: 'admin/products/new',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/admin-products-new/admin-products-new'),
  },
  { path: '**', redirectTo: '' },
];
