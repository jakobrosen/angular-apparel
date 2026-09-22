import { Component, inject, input, output } from '@angular/core';
import { Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { phosphorMagnifyingGlass } from '@ng-icons/phosphor-icons/regular';

@Component({
  selector: 'app-search-menu',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ phosphorMagnifyingGlass })],
  templateUrl: './search-menu.html',
})
export class SearchMenu {
  private readonly router = inject(Router);

  open = input.required<boolean>();

  // Används för att stänga menyn i navbar-komponenten.
  searched = output<void>();

  // Söker på "q" och byter samtidigt sida till produktlistan. Till
  // skillnad från filtren mergas inte params, en ny sökning börjar om.
  search(event: Event, query: string): void {
    event.preventDefault();

    const trimmed = query.trim();
    if (!trimmed) return;

    // Ändrar URLen till att bara innehålla en query param med söktermen.
    this.router.navigate(['/products'], { queryParams: { q: trimmed } });

    // Emittar searched för att stänga menyn efter sökning.
    this.searched.emit();
  }
}
