import { Injectable, inject } from '@angular/core';
import { HttpClient, httpResource } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EMPTY_RESPONSE } from './product';
import type { NewProduct, Product, ProductResponse } from '../types/Product';

// Alla anrop som bara admin-sidorna använder.
@Injectable({ providedIn: 'root' })
export class AdminService {
  private readonly http = inject(HttpClient);

  // Alla produkter till admin-listan. Skapar en resurs, så den måste
  // anropas i komponentens fältinitiering.
  allProducts() {
    return httpResource<ProductResponse>(() => ({ url: '/api/products', params: { limit: 500 } }), {
      defaultValue: EMPTY_RESPONSE,
    });
  }

  createProduct(product: NewProduct): Observable<Product> {
    return this.http.post<Product>('/api/admin/products', product);
  }

  deleteProduct(id: number): Observable<unknown> {
    return this.http.delete(`/api/admin/products/${id}`);
  }
}
