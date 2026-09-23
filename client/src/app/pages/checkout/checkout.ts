import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './checkout.html',
})
export default class Checkout {
  protected readonly cartService = inject(CartService);
}
