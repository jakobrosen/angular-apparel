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

  linkClicked = output<void>();

  section = computed(() => this.menuService.section(this.heading()));
}
