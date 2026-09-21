import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCard } from '../product-card/product-card';
import { ProductService } from '../../services/product';

@Component({
  imports: [ProductCard, RouterLink],
  selector: 'app-product-grid',
  styleUrl: './product-grid.css',
  templateUrl: './product-grid.html',
})
export class ProductGrid {
  readonly products = inject(ProductService).products;

  // Antal skelettkort som visas medan produkterna hämtas.
  readonly skeletons = new Array(8);

  // Condition för tomt resultat.
  readonly isEmpty = computed(
    () => !this.products.isLoading() && this.products.value().data.length === 0,
  );
}
