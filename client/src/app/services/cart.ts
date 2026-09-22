import { Injectable, computed, effect, signal } from '@angular/core';
import type { Product } from '../types/Product';
import type { CartItem } from '../types/Cart';

// Max antal av samma produkt som kan finnas i korgen.
export const MAX_QUANTITY = 10;

// Nyckeln korgen sparas under i localStorage.
const STORAGE_KEY = 'cart';

// Läser korgen från localStorage. Trasig eller gammal data ska inte
// krascha appen vid start, så allt som inte går att tolka blir en tom korg.
function readStoredItems(): CartItem[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
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
    // Syncar varukorgen varje gång den uppdateras.
    effect(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items()));
      } catch {
        console.warn("Couldn't sync cart to localstorage.");
      }
    });
  }

  readonly subtotal = computed(() =>
    this.items().reduce((total, item) => total + item.product.price * item.quantity, 0),
  );

  readonly isEmpty = computed(() => this.items().length === 0);

  // Lägger till produkten om den inte redan finns, och visar korgen.
  add(product: Product, quantity = 1): void {
    this.items.update((items) =>
      items.some((item) => item.product.id === product.id)
        ? items
        : [...items, { product, quantity }],
    );

    this.isOpen.set(true);
  }

  // Sätter ett exakt antal. 0 eller mindre tar bort produkten.
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
