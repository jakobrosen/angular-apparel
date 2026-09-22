import { Component, computed, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { phosphorHeart } from '@ng-icons/phosphor-icons/regular';
import { phosphorHeartFill } from '@ng-icons/phosphor-icons/fill';
import { Product } from '../../types/Product';

// Produkter som är yngre än så här får en "New"-bricka.
const NEW_DAYS = 7;

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe, NgIcon],
  providers: [provideIcons({ phosphorHeart, phosphorHeartFill })],
  templateUrl: './product-card.html',
})
export class ProductCard {
  product = input.required<Product>();

  // Sätts på de fyra första korten för att undvika
  // varningsmeddelande i webbläsarens konsol.
  eager = input(false);

  onSale = computed(() => {
    const { price, prevPrice } = this.product();
    return prevPrice !== null && price < prevPrice;
  });

  // Rabatten i hela procent, t.ex. -33%.
  discount = computed(() => {
    const { price, prevPrice } = this.product();
    return prevPrice ? Math.round((1 - price / prevPrice) * 100) : 0;
  });

  // Styr "New"-brickan.
  isNew = computed(() => {
    const published = new Date(this.product().publishedAt).getTime();
    const days = (Date.now() - published) / (1000 * 60 * 60 * 24);
    return days < NEW_DAYS;
  });

  // Produkten kan sakna bilder, så kortet tål en tom src.
  image = computed(() => this.product().images[0] ?? '');

  // Parsear brand name, t.ex "new-balance" till "new balance".
  brand = computed(() => this.product().brand?.replace(/-/g, ' ') ?? '');
}
