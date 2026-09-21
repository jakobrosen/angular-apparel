import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  phosphorCaretDown,
  phosphorFadersHorizontal,
  phosphorX,
} from '@ng-icons/phosphor-icons/regular';
import { BrandService } from '../../services/brand';
import { CategoryService } from '../../services/category';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-filter-menu',
  standalone: true,
  imports: [RouterLink, NgIcon],
  providers: [provideIcons({ phosphorCaretDown, phosphorFadersHorizontal, phosphorX })],
  styleUrl: './filter-menu.css',
  templateUrl: './filter-menu.html',
})
export class FilterMenu {
  private readonly brandService = inject(BrandService);
  private readonly categoryService = inject(CategoryService);
  readonly productService = inject(ProductService);

  readonly open = signal(false);

  // De tre sektioner som bara är en lista med kryssrutor. Räknas om
  // när märken och kategorier kommer in från backenden.
  readonly sections = computed(() => [
    {
      key: 'gender',
      heading: 'Gender',
      items: [
        { value: 'men', label: 'men' },
        { value: 'women', label: 'women' },
      ],
    },
    {
      key: 'category',
      heading: 'Category',
      items: this.categoryService.categories
        .value()
        .map((category) => ({ value: category.name, label: category.name.replace(/-/g, ' ') })),
    },
    {
      key: 'brand',
      heading: 'Brand',
      items: this.brandService.brands
        .value()
        .map((brand) => ({ value: brand.name, label: brand.name.replace(/-/g, ' ') })),
    },
  ]);

  readonly sortOptions = [
    { value: 'newest', label: 'Newest' },
    { value: 'priceAsc', label: 'Price (low - high)' },
    { value: 'priceDesc', label: 'Price (high - low)' },
  ];

  // Antal träffar.
  readonly total = computed(() => this.productService.products.value().pagination.total);

  // Sektionerna som är utfällda som default.
  private readonly openSections = signal<string[]>(['sort']);

  // Ett klick på det redan valda alternativet nollställer sorteringen.
  // Radioknappar avmarkerar sig inte själva, så det sköts här.
  toggleSort(sort: string): void {
    const currentSort = this.productService.queryParams()['sort'];
    this.productService.setSort(currentSort === sort ? '' : sort);
  }

  isOpen(section: string): boolean {
    return this.openSections().includes(section);
  }

  // Uppdaterar openSections
  toggleSection(section: string): void {
    this.openSections.update((openSections) =>
      openSections.includes(section)
        ? openSections.filter((s) => s !== section)
        : [...openSections, section],
    );
  }
}
