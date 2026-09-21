import { Component, inject } from '@angular/core';
import { FilterMenu } from '../../components/filter-menu/filter-menu';
import { ProductGrid } from '../../components/product-grid/product-grid';
import { ProductGridHeader } from '../../components/product-grid-header/product-grid-header';
import { ProductService } from '../../services/product';
import { InfoBanner } from '../../components/info-banner/info-banner';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FilterMenu, ProductGrid, ProductGridHeader, InfoBanner],
  templateUrl: './products.html',
})
export default class Products {
  protected readonly productService = inject(ProductService);
}
