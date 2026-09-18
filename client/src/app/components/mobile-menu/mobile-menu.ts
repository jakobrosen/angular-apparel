import { Component, computed, inject, input, linkedSignal, output, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { phosphorCaretLeft, phosphorCaretRight } from '@ng-icons/phosphor-icons/regular';
import { MenuColumn } from '../menu-column/menu-column';
import { MenuService } from '../../services/menu';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [NgIcon, MenuColumn],
  providers: [provideIcons({ phosphorCaretLeft, phosphorCaretRight })],
  templateUrl: './mobile-menu.html',
})
export class MobileMenu {
  // Samma menystruktur som hover-menyn renderar från.
  protected readonly menuService = inject(MenuService);

  open = input.required<boolean>();

  // Används för att stänga hela mobilmenyn i navbar-komponenten
  // när användaren klickat på en länk.
  linkClicked = output<void>();

  // Vilken huvudrubrik som är öppen, t.ex. 'WOMEN'.
  openHeading = signal<string | null>(null);

  panelHeading = linkedSignal<string | null, string>({
    source: this.openHeading,
    computation: (heading, previous) => heading ?? previous?.value ?? '',
  });

  openSubheading = signal<string | null>(null);
  panelSubheading = linkedSignal<string | null, string>({
    source: this.openSubheading,
    computation: (subheading, previous) => subheading ?? previous?.value ?? '',
  });

  panelSection = computed(() => this.menuService.section(this.panelHeading()));
  panelColumn = computed(() =>
    this.panelSection()?.columns.find((column) => column.heading === this.panelSubheading()),
  );

  onTransitionEnd(event: TransitionEvent): void {
    if (event.target === event.currentTarget && !this.open()) {
      this.openHeading.set(null);
    }
  }

  onRowTransitionEnd(event: TransitionEvent): void {
    if (event.target === event.currentTarget && this.openHeading() === null) {
      this.openSubheading.set(null);
    }
  }
}
