import { Injectable, inject } from '@angular/core';
import { HttpClient, httpResource } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EMPTY_RESPONSE } from './product';
import type { NewProduct, Product, ProductResponse } from '../types/Product';

@Injectable({ providedIn: 'root' })
export class AdminService {
  private readonly http = inject(HttpClient);

  allProducts() {
    return httpResource<ProductResponse>(
      () => ({ url: '/api/admin/products', params: { limit: 500 } }),
      { defaultValue: EMPTY_RESPONSE },
    );
  }

  createProduct(product: NewProduct): Observable<Product> {
    return this.http.post<Product>('/api/admin/products', product);
  }

  deleteProduct(id: number): Observable<unknown> {
    return this.http.delete(`/api/admin/products/${id}`);
  }
}
