import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  phosphorBag,
  phosphorMagnifyingGlass,
  phosphorList,
  phosphorX,
} from '@ng-icons/phosphor-icons/regular';
import { Cart } from '../cart/cart';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIcon, Cart],
  providers: [provideIcons({ phosphorBag, phosphorMagnifyingGlass, phosphorList, phosphorX })],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  menuIsOpen = signal(false);
  cartIsOpen = signal(false);

  toggleMenu(): void {
    this.menuIsOpen.update((value) => !value);
  }

  toggleCart(): void {
    this.cartIsOpen.update((value) => !value);
  }

  closeAllMenus(): void {
    this.menuIsOpen.set(false);
    this.cartIsOpen.set(false);
  }
}
