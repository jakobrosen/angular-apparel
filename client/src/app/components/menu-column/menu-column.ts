import { Component, computed, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuColumnDef } from '../../types/Menu';

@Component({
  selector: 'app-menu-column',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-column.html',
})
export class MenuColumn {
  column = input.required<MenuColumnDef>();

  mobile = input(false);

  linkClicked = output<void>();

  links = computed(() => {
    const { params, itemParam, items } = this.column();
    return items.map((item) => ({
      name: item.name,
      queryParams: { ...params, ...(item.params ?? (itemParam ? { [itemParam]: item.name } : {})) },
      label: item.label ?? item.name.replace(/-/g, ' '),
    }));
  });
}
