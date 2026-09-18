import { Component, computed, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuColumnDef } from '../../services/menu';

@Component({
  selector: 'app-menu-column',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-column.html',
})
export class MenuColumn {
  // Kolumnen som ska renderas: rubrik, basPath, eventuell extraPath
  // och länkarna. Kommer från MenuService.sections.
  column = input.required<MenuColumnDef>();

  // Mobilmenyn sätter denna för att få större, touch-vänliga länkar
  // i samma stil som menyns knappar istället för hover-menyns täta
  // lista. Rubriken utelämnas då, eftersom mobilmenyn visar den i sin
  // egen topprad.
  mobile = input(false);

  // Används för att stänga menyn i navbar-komponenten.
  linkClicked = output<void>();

  // Bygger routerLink-arrayen och visningstexten för varje länk.
  // Länken blir basePath + (extraPath) + name, t.ex.
  // /products/women/new/shoes. Texten är label om den finns, annars
  // name med "-" utbytt mot mellanslag (t.ex. "new-balance").
  links = computed(() => {
    const { basePath, extraPath, items } = this.column();
    return items.map((item) => ({
      name: item.name,
      path: extraPath ? [basePath, extraPath, item.name] : [basePath, item.name],
      label: item.label ?? item.name.replace(/-/g, ' '),
    }));
  });
}
