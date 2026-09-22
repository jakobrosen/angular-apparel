import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  phosphorBag,
  phosphorMagnifyingGlass,
  phosphorList,
  phosphorX,
} from '@ng-icons/phosphor-icons/regular';
import { Cart } from '../cart/cart';
import { HoverMenu } from '../hover-menu/hover-menu';
import { MobileMenu } from '../mobile-menu/mobile-menu';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIcon, Cart, HoverMenu, MobileMenu],
  providers: [provideIcons({ phosphorBag, phosphorMagnifyingGlass, phosphorList, phosphorX })],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  protected readonly cartService = inject(CartService);

  // Styr vilka menyer som är öppna.
  mobileMenuOpen = signal(false);
  hoverMenuOpen = signal(false);

  // Korgens läge ägs av servicen, så produktsidan kan öppna panelen.
  readonly cartOpen = this.cartService.isOpen;

  hoverMenuHeading = signal('');

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((value) => !value);
  }
  openHoverMenu(heading: string): void {
    this.hoverMenuHeading.set(heading);
    this.hoverMenuOpen.set(true);
  }
  closeHoverMenu(): void {
    this.hoverMenuOpen.set(false);
  }
  toggleCart(): void {
    this.cartOpen.update((value) => !value);
  }
  closeAllMenus(): void {
    this.mobileMenuOpen.set(false);
    this.cartOpen.set(false);
    this.hoverMenuOpen.set(false);
  }
}
