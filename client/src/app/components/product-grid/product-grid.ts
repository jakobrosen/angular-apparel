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

  readonly products = input.required<HttpResourceRef<ProductResponse>>();

  readonly paginated = input(true);

  readonly pagination = computed(() => this.products().value().pagination);

  readonly skeletons = new Array(8);

  readonly isEmpty = computed(
    () => !this.products().isLoading() && this.products().value().data.length === 0,
  );
}
