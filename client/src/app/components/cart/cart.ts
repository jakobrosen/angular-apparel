import { Component, inject, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { phosphorX } from '@ng-icons/phosphor-icons/regular';
import { CartProductCard } from '../cart-product-card/cart-product-card';
import { CartService } from '../../services/cart';

@Component({
  imports: [CurrencyPipe, RouterLink, NgIcon, CartProductCard],
  providers: [provideIcons({ phosphorX })],
  selector: 'app-cart',
  templateUrl: './cart.html',
})
export class Cart {
  protected readonly cartService = inject(CartService);

  close = output<void>();
}
