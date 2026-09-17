import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hover-menu',
  standalone: true,
  imports: [],
  templateUrl: './hover-menu.html',
})
export class HoverMenu {
  isOpen = input.required<boolean>();
  heading = input.required<string>();
}
