import type { Product } from '../types/Product';

// Bygger URL-segmentet för en produkt, t.ex. "classic-cotton-shirt-42".
export function productSlug(product: Product): string {
  const name = product.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return `${name}-${product.id}`;
}

// Plockar ut ID ur en slug.
export function productIdFromSlug(slug: string): number | null {
  const match = /-(\d+)$/.exec(slug);
  return match ? Number(match[1]) : null;
}
