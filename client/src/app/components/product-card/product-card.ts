import { Component, computed, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { phosphorHeart } from '@ng-icons/phosphor-icons/regular';
import { phosphorHeartFill } from '@ng-icons/phosphor-icons/fill';
import { Product } from '../../types/Product';
import { productSlug } from '../../utilities/slug';

const NEW_DAYS = 7;

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, NgIcon],
  providers: [provideIcons({ phosphorHeart, phosphorHeartFill })],
  templateUrl: './product-card.html',
})
export class ProductCard {
  product = input.required<Product>();

  eager = input(false);

  onSale = computed(() => {
    const { price, prevPrice } = this.product();
    return prevPrice !== null && price < prevPrice;
  });

  discount = computed(() => {
    const { price, prevPrice } = this.product();
    return prevPrice ? Math.round((1 - price / prevPrice) * 100) : 0;
  });

  isNew = computed(() => {
    const published = new Date(this.product().publishedAt).getTime();
    const days = (Date.now() - published) / (1000 * 60 * 60 * 24);
    return days < NEW_DAYS;
  });

  image = computed(() => this.product().images[0] ?? '');

  brand = computed(() => this.product().brand?.replace(/-/g, ' ') ?? '');

  link = computed(() => ['/products', productSlug(this.product())]);
}
