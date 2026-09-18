import { Component, computed, inject, input, output } from '@angular/core';
import { MenuColumn } from '../menu-column/menu-column';
import { MenuService } from '../../services/menu';

@Component({
  selector: 'app-hover-menu',
  standalone: true,
  imports: [MenuColumn],
  templateUrl: './hover-menu.html',
})
export class HoverMenu {
  private readonly menuService = inject(MenuService);

  open = input.required<boolean>();
  heading = input.required<string>();

  // Används för att trigga closeHoverMenu() i navbar-komponenten.
  linkClicked = output<void>();

  // Sektionen (med sina kolumner) för den rubrik navbaren pekar på.
  // Räknas om både när rubriken byts och när menydatan kommer in
  // från backenden.
  section = computed(() => this.menuService.section(this.heading()));
}
