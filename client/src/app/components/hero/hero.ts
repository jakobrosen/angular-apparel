import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Params, RouterLink } from '@angular/router';

@Component({
  imports: [NgOptimizedImage, RouterLink],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero {
  readonly header = input<string>('ANGULAR APPAREL');
  readonly subHeader = input<string>('Shop clothing from popular brands.');
  readonly buttonText = input<string>('SHOP NOW');
  readonly buttonLink = input<string>('/products');
  readonly buttonParams = input<Params>({});
}
