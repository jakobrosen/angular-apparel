import { Component, inject } from '@angular/core';
import { ProductGrid } from '../../components/product-grid/product-grid';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductGrid],
  templateUrl: './products.html',
})
export default class Products {}
