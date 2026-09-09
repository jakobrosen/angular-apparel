import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../components/product-card/product-card';

export type Gender = "Men's" | "Women's" | 'Unisex';

// Mirrors the server's productFilterSchema (server/src/types/validators.ts) -
// only the fields this client actually uses.
export interface ProductFilters {
  gender?: Gender;
  brandId?: number;
  categoryId?: number;
  limit?: number;
}

interface ApiProduct {
  title: string;
  price: number;
  brand: { name: string } | null;
  images: { url: string }[];
}

interface PaginatedResponse<T> {
  data: T[];
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly http = inject(HttpClient);

  getProductCards(filters: ProductFilters = {}): Observable<Product[]> {
    const params: Record<string, string | number> = {};
    if (filters.gender) params['gender'] = filters.gender;
    if (filters.brandId) params['brandId'] = filters.brandId;
    if (filters.categoryId) params['categoryId'] = filters.categoryId;
    if (filters.limit) params['limit'] = filters.limit;

    return this.http.get<PaginatedResponse<ApiProduct>>('/api/products', { params }).pipe(
      map((response) =>
        response.data.map((product) => ({
          images: product.images.map((image) => image.url),
          title: product.title,
          brand: product.brand?.name,
          price: product.price,
        })),
      ),
    );
  }
}
