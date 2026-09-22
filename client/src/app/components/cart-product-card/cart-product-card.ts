import { Component, computed, input, model, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { phosphorHeart, phosphorTrash } from '@ng-icons/phosphor-icons/regular';
import { Product } from '../../types/Product';
import { productSlug } from '../../utilities/slug';
import { MAX_QUANTITY } from '../../services/cart';

@Component({
  selector: 'app-cart-product-card',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, NgIcon],
  providers: [provideIcons({ phosphorHeart, phosphorTrash })],
  templateUrl: './cart-product-card.html',
})
export class CartProductCard {
  readonly product = input.required<Product>();

  // model ger tvåvägsbindning, så föräldern kan skriva [(quantity)].
  readonly quantity = model(1);

  readonly remove = output<void>();
  readonly favorite = output<void>();

  // [1, 2, 3, ...] till <select>.
  readonly quantities = Array.from({ length: MAX_QUANTITY }, (_, index) => index + 1);

  readonly onSale = computed(() => {
    const { price, prevPrice } = this.product();
    return prevPrice !== null && price < prevPrice;
  });

  // Radens pris, alltså styckpriset gånger antalet.
  readonly linePrice = computed(() => this.product().price * this.quantity());

  readonly linePrevPrice = computed(() => (this.product().prevPrice ?? 0) * this.quantity());

  // Parsear brand name, t.ex "new-balance" till "new balance".
  readonly brand = computed(() => this.product().brand?.replace(/-/g, ' ') ?? '');

  readonly image = computed(() => this.product().images[0] ?? '');

  readonly link = computed(() => ['/products', productSlug(this.product())]);
}
