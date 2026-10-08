import type { Product } from '../types/Product';

export function productSlug(product: Product): string {
  const name = product.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return `${name}-${product.id}`;
}

export function productIdFromSlug(slug: string): number | null {
  const match = /-(\d+)$/.exec(slug);
  return match ? Number(match[1]) : null;
}
