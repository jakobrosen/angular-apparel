import { Component, ElementRef, computed, inject, signal, viewChildren } from '@angular/core';
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
import { CategoryService } from '../../services/category';
import { BrandService } from '../../services/brand';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIcon, Cart, HoverMenu, MobileMenu],
  providers: [provideIcons({ phosphorBag, phosphorMagnifyingGlass, phosphorList, phosphorX })],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  // Menu controls.
  mobileMenuIsOpen = signal(false);
  cartIsOpen = signal(false);
  hoverMenuIsOpen = signal(false);
  hoverMenuHeading = signal('');

  toggleMobileMenu(): void {
    this.mobileMenuIsOpen.update((value) => !value);
  }
  openHoverMenu(heading: string): void {
    this.hoverMenuHeading.set(heading);
    this.hoverMenuIsOpen.set(true);
  }
  closeHoverMenu(): void {
    this.hoverMenuIsOpen.set(false);
  }
  toggleCart(): void {
    this.cartIsOpen.update((value) => !value);
  }
  closeAllMenus(): void {
    this.mobileMenuIsOpen.set(false);
    this.cartIsOpen.set(false);
    this.hoverMenuIsOpen.set(false);
  }
}
