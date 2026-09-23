import { Component, computed, inject, input } from '@angular/core';
import { HttpResourceRef } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { phosphorCaretLeft, phosphorCaretRight } from '@ng-icons/phosphor-icons/regular';
import { ProductCard } from '../product-card/product-card';
import { ProductService } from '../../services/product';
import { ProductResponse } from '../../types/Product';

@Component({
  imports: [ProductCard, RouterLink, NgIcon],
  providers: [provideIcons({ phosphorCaretLeft, phosphorCaretRight })],
  selector: 'app-product-grid',
  templateUrl: './product-grid.html',
})
export class ProductGrid {
  protected readonly productService = inject(ProductService);

  // Input för de produkter som ska visas.
  readonly products = input.required<HttpResourceRef<ProductResponse>>();

  // Om pagination ska vara aktiverat.
  readonly paginated = input(true);

  // Sidinformationen som backenden skickar med svaret.
  readonly pagination = computed(() => this.products().value().pagination);

  // Antal skelettkort som visas medan produkterna hämtas.
  readonly skeletons = new Array(8);

  // Condition för tomt resultat.
  readonly isEmpty = computed(
    () => !this.products().isLoading() && this.products().value().data.length === 0,
  );
}
