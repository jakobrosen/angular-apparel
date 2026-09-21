import { Injectable, computed, inject } from '@angular/core';
import { BrandService } from './brand';
import { CategoryService } from './category';
import { MenuItem, MenuSection } from '../types/Menu';

// FEATURED-kolumnernas länkar finns inte i backenden, så de skrivs här.
const FEATURED: MenuItem[] = [
  { name: 'new', label: 'New arrivals', params: { new: 'true' } },
  { name: 'sale', label: 'Sale', params: { discount: 'true' } },
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
            params: { gender: 'women', new: 'true' },
            itemParam: 'category',
            items: clothing,
          },
          {
            heading: "WOMEN'S ACCESSORIES",
            params: { gender: 'women', new: 'true' },
            itemParam: 'category',
            items: accessories,
          },
          {
            heading: "MEN'S CLOTHING",
            params: { gender: 'men', new: 'true' },
            itemParam: 'category',
            items: clothing,
          },
          {
            heading: "MEN'S ACCESSORIES",
            params: { gender: 'men', new: 'true' },
            itemParam: 'category',
            items: accessories,
          },
        ],
      },
      {
        heading: 'SALE',
        columns: [
          {
            heading: "WOMEN'S CLOTHING",
            params: { gender: 'women', discount: 'true' },
            itemParam: 'category',
            items: clothing,
          },
          {
            heading: "WOMEN'S ACCESSORIES",
            params: { gender: 'women', discount: 'true' },
            itemParam: 'category',
            items: accessories,
          },
          {
            heading: "MEN'S CLOTHING",
            params: { gender: 'men', discount: 'true' },
            itemParam: 'category',
            items: clothing,
          },
          {
            heading: "MEN'S ACCESSORIES",
            params: { gender: 'men', discount: 'true' },
            itemParam: 'category',
            items: accessories,
          },
        ],
      },
      {
        heading: 'ALL PRODUCTS',
        columns: [
          { heading: 'CLOTHING', params: {}, itemParam: 'category', items: clothing },
          { heading: 'ACCESSORIES', params: {}, itemParam: 'category', items: accessories },
          { heading: 'BRANDS', params: {}, itemParam: 'brand', items: brands },
          { heading: 'FEATURED', params: {}, items: FEATURED },
        ],
      },
      {
        heading: 'WOMEN',
        columns: [
          {
            heading: 'CLOTHING',
            params: { gender: 'women' },
            itemParam: 'category',
            items: clothing,
          },
          {
            heading: 'ACCESSORIES',
            params: { gender: 'women' },
            itemParam: 'category',
            items: accessories,
          },
          { heading: 'BRANDS', params: { gender: 'women' }, itemParam: 'brand', items: brands },
          { heading: 'FEATURED', params: { gender: 'women' }, items: FEATURED },
        ],
      },
      {
        heading: 'MEN',
        columns: [
          {
            heading: 'CLOTHING',
            params: { gender: 'men' },
            itemParam: 'category',
            items: clothing,
          },
          {
            heading: 'ACCESSORIES',
            params: { gender: 'men' },
            itemParam: 'category',
            items: accessories,
          },
          { heading: 'BRANDS', params: { gender: 'men' }, itemParam: 'brand', items: brands },
          { heading: 'FEATURED', params: { gender: 'men' }, items: FEATURED },
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
