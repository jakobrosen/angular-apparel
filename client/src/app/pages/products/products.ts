import { Component } from '@angular/core';
import { FilterMenu } from '../../components/filter-menu/filter-menu';
import { ProductGrid } from '../../components/product-grid/product-grid';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FilterMenu, ProductGrid],
  templateUrl: './products.html',
})
export default class Products {}
