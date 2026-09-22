import { Component, inject } from '@angular/core';
import { ProductGrid } from '../../components/product-grid/product-grid';
import { ProductService } from '../../services/product';
import { Hero } from '../../components/hero/hero';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductGrid, Hero],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export default class Home {
  protected readonly productService = inject(ProductService);
}
