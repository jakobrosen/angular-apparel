import { Injectable, inject, computed, effect } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
import { httpResource } from '@angular/common/http';
import type { ProductResponse } from '../types/Product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly router = inject(Router);

  // Skapar en signal för den aktuella URLen. Ett NavigationEnd-objekt
  // har propertyn urlAfterRedirects som innehåller URLen efter att
  // en navigering är slutförd. Här fångar vi upp alla dessa objekt
  // från router.events, och hämtar ut värdet.
  readonly url = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) => e.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  // Hämtar ut query-parametrar. router.parseUrl returnerar ett
  // UrlTree-objekt som har egenskapen "queryParams". Computed
  // gör även så att queryParams blir en signal.
  readonly queryParams = computed(() => this.router.parseUrl(this.url()).queryParams);

  // Använder httpResource för att hämta produkter baserat på
  // de aktuella query-parametrarna.
  readonly products = httpResource<ProductResponse>(
    () =>
      this.url().startsWith('/products')
        ? { url: '/api/products', params: this.queryParams() }
        : undefined,
    { defaultValue: { pagination: { page: 1, limit: 48, total: 0, totalPages: 0 }, data: [] } },
  );

  constructor() {
    effect(() => console.log(this.queryParams()));
    effect(() => console.log(this.products.value()));
  }
}
