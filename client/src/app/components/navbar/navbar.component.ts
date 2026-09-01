import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  phosphorBag,
  phosphorMagnifyingGlass,
  phosphorList,
  phosphorX,
} from '@ng-icons/phosphor-icons/regular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIcon],
  providers: [provideIcons({ phosphorBag, phosphorMagnifyingGlass, phosphorList, phosphorX })],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isOpen = signal(false);

  toggleMenu(): void {
    this.isOpen.update((value) => !value);
  }
}
