import { Component, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { combineLatest, of, switchMap } from 'rxjs';
import { ProductCard } from '../product-card/product-card';
import { ProductService, ProductFilters, Gender } from '../../services/product';
import { BrandService, Brand } from '../../services/brand';
import { CategoryService, Category } from '../../services/category';

const GENDER_SLUGS: Record<string, Gender> = {
  men: "Men's",
  women: "Women's",
  unisex: 'Unisex',
};

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  private readonly productService = inject(ProductService);
  private readonly brandService = inject(BrandService);
  private readonly categoryService = inject(CategoryService);

  // Bound to the route's :filter segment via withComponentInputBinding().
  filter = input.required<string>();

  products = toSignal(
    combineLatest([
      toObservable(this.filter),
      this.brandService.getBrands(),
      this.categoryService.getCategories(),
    ]).pipe(
      switchMap(([filter, brands, categories]) => {
        const filters = resolveFilters(filter, brands, categories);
        return filters ? this.productService.getProductCards(filters) : of([]);
      }),
    ),
    { initialValue: [] },
  );
}

// Resolves the URL's :filter segment (e.g. "all", "men", "nike", "shoes")
// against the known genders, brands, and categories. Returns null when
// nothing matches, so the caller can show an empty result instead of
// silently falling back to an unrelated listing.
function resolveFilters(
  filter: string,
  brands: Brand[],
  categories: Category[],
): ProductFilters | null {
  const slug = slugify(filter);

  if (slug === 'all') return {};

  const gender = GENDER_SLUGS[slug];
  if (gender) return { gender };

  const brand = brands.find((b) => slugify(b.name) === slug);
  if (brand) return { brandId: brand.id };

  const category = categories.find((c) => slugify(c.name) === slug);
  if (category) return { categoryId: category.id };

  return null;
}

// "New Balance" -> "new-balance", so a multi-word brand/category name still
// matches its kebab-case URL segment (e.g. /new-balance).
function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
