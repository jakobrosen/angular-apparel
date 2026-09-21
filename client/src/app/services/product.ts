import { Injectable, inject, computed, effect } from '@angular/core';
import { Router, NavigationEnd, Params } from '@angular/router';
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
  private readonly url = toSignal(
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

  // Tar in en ny query-parameter som ett Params-objekt, och använder
  // router.navigate för att ändra URLen. queryParamsHandling: 'merge'
  // mergar automatiskt ihop den nya parametern med de gamla.
  private updateParams(params: Params): void {
    this.router.navigate([], {
      queryParams: { ...params, page: null },
      queryParamsHandling: 'merge',
    });
  }

  // Returnerar de filter som är aktiva (redan finns i URLen) för en viss
  // key (category, brand, etc) parseat som en array.
  getActiveFilters(key: string): string[] {
    const raw = this.queryParams()[key];
    return raw ? raw.split(',') : [];
  }

  // Används för att toggla ett filter av/på.
  toggleFilter(key: string, filter: string): void {
    // Tar reda på vilka filter som är aktiva i URLen.
    const activeFilters = this.getActiveFilters(key);

    // Lägger till eller tar bort det nya filtervärdet baserat på om
    // det redan var aktivt eller inte.
    const updatedFilters = activeFilters.includes(filter)
      ? activeFilters.filter((f) => f !== filter)
      : [...activeFilters, filter];

    // Uppdatera URLen med updateParams.
    this.updateParams({ [key]: updatedFilters.length ? updatedFilters.join(',') : null });
  }

  // Uppdaterar max/min price.
  setPrice(key: 'minPrice' | 'maxPrice', value: string): void {
    this.updateParams({ [key]: value || null });
  }

  // Egen toggle för discount eftersom backenden bara tar emot "true" eller null.
  toggleDiscount(): void {
    this.updateParams({ discount: this.queryParams()['discount'] ? null : 'true' });
  }

  setPage(page: number): void {
    this.router.navigate([], {
      queryParams: { page },
      queryParamsHandling: 'merge',
    });
  }

  // Antal träffar.
  readonly total = computed(() => this.products.value().pagination.total);

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
