import { Injectable, computed, effect, signal } from '@angular/core';
import type { Product } from '../types/Product';
import type { CartItem } from '../types/Cart';

export const MAX_QUANTITY = 10;

function readStoredItems(): CartItem[] {
  try {
    const stored = localStorage.getItem('cart');
    return stored ? (JSON.parse(stored) as CartItem[]) : [];
  } catch {
    return [];
  }
}

@Injectable({ providedIn: 'root' })
export class CartService {
  readonly items = signal<CartItem[]>(readStoredItems());

  readonly isOpen = signal(false);

  constructor() {
    effect(() => {
      try {
        localStorage.setItem('cart', JSON.stringify(this.items()));
      } catch {
        console.warn("Couldn't sync cart to localstorage.");
      }
    });
  }

  readonly subtotal = computed(() =>
    this.items().reduce((total, item) => total + item.product.price * item.quantity, 0),
  );

  readonly isEmpty = computed(() => this.items().length === 0);

  add(product: Product, quantity = 1): void {
    this.items.update((items) =>
      items.some((item) => item.product.id === product.id)
        ? items
        : [...items, { product, quantity }],
    );

    this.isOpen.set(true);
  }

  setQuantity(productId: number, quantity: number): void {
    if (quantity < 1) {
      this.remove(productId);
      return;
    }

    this.items.update((items) =>
      items.map((item) => (item.product.id === productId ? { ...item, quantity } : item)),
    );
  }

  remove(productId: number): void {
    this.items.update((items) => items.filter((item) => item.product.id !== productId));
  }

  clear(): void {
    this.items.set([]);
  }
}
