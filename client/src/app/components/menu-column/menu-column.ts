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
  // Kolumnen som ska renderas: rubrik, params och länkarna.
  // Kommer från MenuService.sections.
  column = input.required<MenuColumnDef>();

  // Mobilmenyn sätter denna för att få större, touch-vänliga länkar
  // i samma stil som menyns knappar istället för hover-menyns täta
  // lista. Rubriken utelämnas då, eftersom mobilmenyn visar den i sin
  // egen topprad.
  mobile = input(false);

  // Används för att stänga menyn i navbar-komponenten.
  linkClicked = output<void>();

  // Bygger query params och visningstexten för varje länk. Alla länkar
  // går till /products, så filtren ligger i params: kolumnens params
  // plus itemParam=name, t.ex. ?gender=women&new=true&category=shoes.
  // Texten är label om den finns, annars name med "-" utbytt mot
  // mellanslag (t.ex. "new-balance").
  links = computed(() => {
    const { params, itemParam, items } = this.column();
    return items.map((item) => ({
      name: item.name,
      queryParams: { ...params, ...(item.params ?? (itemParam ? { [itemParam]: item.name } : {})) },
      label: item.label ?? item.name.replace(/-/g, ' '),
    }));
  });
}
