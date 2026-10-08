import { Injectable, inject, computed } from '@angular/core';
import { Router, NavigationEnd, Params } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
import { httpResource } from '@angular/common/http';
import type { Product, ProductResponse } from '../types/Product';

export const EMPTY_RESPONSE: ProductResponse = {
  pagination: { page: 1, limit: 48, total: 0, totalPages: 0 },
  data: [],
};

const LATEST_PARAMS = { sort: 'newest', limit: 8 };

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly router = inject(Router);

  private readonly url = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map((e) => e.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  readonly queryParams = computed(() => this.router.parseUrl(this.url()).queryParams);

  private readonly path = computed(() => this.url().split('?')[0]);

  private updateParams(params: Params): void {
    this.router.navigate([], {
      queryParams: { ...params, page: null },
      queryParamsHandling: 'merge',
    });
  }

  getActiveFilters(key: string): string[] {
    const raw = this.queryParams()[key];
    return raw ? raw.split(',') : [];
  }

  toggleFilter(key: string, filter: string): void {
    const activeFilters = this.getActiveFilters(key);

    const updatedFilters = activeFilters.includes(filter)
      ? activeFilters.filter((f) => f !== filter)
      : [...activeFilters, filter];

    this.updateParams({ [key]: updatedFilters.length ? updatedFilters.join(',') : null });
  }

  setPrice(key: 'minPrice' | 'maxPrice', value: string): void {
    this.updateParams({ [key]: value || null });
  }

  setSort(sort: string): void {
    this.updateParams({ sort: sort || null });
  }

  toggleDiscount(): void {
    this.updateParams({ discount: this.queryParams()['discount'] ? null : 'true' });
  }

  setPage(page: number): void {
    this.router.navigate([], {
      queryParams: { page },
      queryParamsHandling: 'merge',
    });
  }

  readonly total = computed(() => this.products.value().pagination.total);

  products = httpResource<ProductResponse>(
    () =>
      this.path() === '/products'
        ? { url: '/api/products', params: this.queryParams() }
        : undefined,
    { defaultValue: EMPTY_RESPONSE },
  );

  latestProducts = httpResource<ProductResponse>(
    () => (this.path() === '/' ? { url: '/api/products', params: LATEST_PARAMS } : undefined),
    { defaultValue: EMPTY_RESPONSE },
  );

  productById(id: () => number | null) {
    return httpResource<Product>(() => {
      const productId = id();
      return productId === null ? undefined : { url: `/api/products/${productId}` };
    });
  }

  relatedProducts(product: () => Product | undefined, limit: number) {
    return httpResource<ProductResponse>(
      () => {
        const current = product();
        if (!current?.category) return undefined;

        return {
          url: '/api/products',
          params: { gender: current.gender, category: current.category, limit },
        };
      },
      { defaultValue: EMPTY_RESPONSE },
    );
  }
}
