import { Injectable, inject, computed, effect } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
import { BrandService } from './brand';
import { CategoryService } from './category';

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

  readonly urlTree = computed(() => this.router.parseUrl(this.url()));
  readonly segments = computed(
    () => this.urlTree().root.children['primary']?.segments.map((s) => s.path) ?? [],
  );
  readonly queryParams = computed(() => this.urlTree().queryParams);

  constructor() {
    effect(() => console.log(this.urlTree()));
    effect(() => console.log(this.segments()));
    effect(() => console.log(this.queryParams()));
  }
}
