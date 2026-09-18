import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CurrentUrlService {
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
}
