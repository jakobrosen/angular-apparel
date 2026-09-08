import { Component, input } from '@angular/core';

export interface Product {
  images: string[];
  title: string;
  brand?: string;
  price: number;
}

@Component({
  imports: [],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  product = input.required<Product>();
}
