import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../components/product-card/product-card';

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

  getProductCards(limit = 8): Observable<Product[]> {
    return this.http
      .get<PaginatedResponse<ApiProduct>>('/api/products', { params: { limit } })
      .pipe(
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
