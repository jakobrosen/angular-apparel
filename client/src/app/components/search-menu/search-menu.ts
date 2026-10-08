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

  searched = output<void>();

  search(event: Event, query: string): void {
    event.preventDefault();

    const trimmed = query.trim();
    if (!trimmed) return;

    this.router.navigate(['/products'], { queryParams: { q: trimmed } });

    this.searched.emit();
  }
}
