import { Injectable, computed, inject } from '@angular/core';
import { BrandService } from './brand';
import { CategoryService } from './category';

// En länk i en menykolumn. name blir sista segmentet i länkens path
// (t.ex. "shoes" eller "new-balance"). Både Brand och Category passar
// in här direkt. label används för visningstext när namnet inte duger,
// annars visas name med "-" utbytt mot mellanslag.
export interface MenuItem {
  name: string;
  label?: string;
}

// En kolumn i menyn, t.ex. "WOMEN'S CLOTHING". Varje item länkar till
// basePath + (extraPath) + item.name, t.ex. /products/women/new/shoes.
export interface MenuColumnDef {
  heading: string;
  basePath: string;
  extraPath?: string;
  items: MenuItem[];
}

// En huvudrubrik i menyn ("WOMEN") med sina kolumner.
export interface MenuSection {
  heading: string;
  columns: MenuColumnDef[];
}

// FEATURED-kolumnernas länkar finns inte i backenden, så de skrivs här.
const FEATURED: MenuItem[] = [
  { name: 'new', label: 'New arrivals' },
  { name: 'sale', label: 'Sale' },
];

// Hela menystrukturen på ett ställe. Både hover-menyn (desktop) och
// mobilmenyn renderar från sections, så en ny kolumn behöver bara
// läggas till här för att dyka upp i båda.
@Injectable({ providedIn: 'root' })
export class MenuService {
  private readonly brandService = inject(BrandService);
  private readonly categoryService = inject(CategoryService);

  // Kategorierna delas upp på "type" för att bli egna kolumner.
  private readonly clothing = computed(() =>
    this.categoryService.categories.value().filter((category) => category.type === 'clothing'),
  );
  private readonly accessories = computed(() =>
    this.categoryService.categories.value().filter((category) => category.type === 'accessory'),
  );

  // Räknas om när märken eller kategorier kommer in från backenden.
  readonly sections = computed<MenuSection[]>(() => {
    const clothing = this.clothing();
    const accessories = this.accessories();
    const brands = this.brandService.brands.value();

    return [
      {
        heading: 'NEW ARRIVALS',
        columns: [
          {
            heading: "WOMEN'S CLOTHING",
            basePath: '/products/women',
            extraPath: 'new',
            items: clothing,
          },
          {
            heading: "WOMEN'S ACCESSORIES",
            basePath: '/products/women',
            extraPath: 'new',
            items: accessories,
          },
          {
            heading: "MEN'S CLOTHING",
            basePath: '/products/men',
            extraPath: 'new',
            items: clothing,
          },
          {
            heading: "MEN'S ACCESSORIES",
            basePath: '/products/men',
            extraPath: 'new',
            items: accessories,
          },
        ],
      },
      {
        heading: 'SALE',
        columns: [
          {
            heading: "WOMEN'S CLOTHING",
            basePath: '/products/women',
            extraPath: 'sale',
            items: clothing,
          },
          {
            heading: "WOMEN'S ACCESSORIES",
            basePath: '/products/women',
            extraPath: 'sale',
            items: accessories,
          },
          {
            heading: "MEN'S CLOTHING",
            basePath: '/products/men',
            extraPath: 'sale',
            items: clothing,
          },
          {
            heading: "MEN'S ACCESSORIES",
            basePath: '/products/men',
            extraPath: 'sale',
            items: accessories,
          },
        ],
      },
      {
        heading: 'ALL PRODUCTS',
        columns: [
          { heading: 'CLOTHING', basePath: '/products', items: clothing },
          { heading: 'ACCESSORIES', basePath: '/products', items: accessories },
          { heading: 'BRANDS', basePath: '/products', items: brands },
          { heading: 'FEATURED', basePath: '/products', items: FEATURED },
        ],
      },
      {
        heading: 'WOMEN',
        columns: [
          { heading: 'CLOTHING', basePath: '/products/women', items: clothing },
          { heading: 'ACCESSORIES', basePath: '/products/women', items: accessories },
          { heading: 'BRANDS', basePath: '/products/women', items: brands },
          { heading: 'FEATURED', basePath: '/products/women', items: FEATURED },
        ],
      },
      {
        heading: 'MEN',
        columns: [
          { heading: 'CLOTHING', basePath: '/products/men', items: clothing },
          { heading: 'ACCESSORIES', basePath: '/products/men', items: accessories },
          { heading: 'BRANDS', basePath: '/products/men', items: brands },
          { heading: 'FEATURED', basePath: '/products/men', items: FEATURED },
        ],
      },
    ];
  });

  // Slår upp en sektion på dess rubrik. Menyerna håller den öppna
  // rubriken som en sträng, så det är så de hittar sina kolumner.
  section(heading: string): MenuSection | undefined {
    return this.sections().find((section) => section.heading === heading);
  }
}
