import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductGrid } from '../../components/product-grid/product-grid';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, ProductGrid],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export default class Home {
  protected readonly productService = inject(ProductService);
}
