import { Component, inject } from '@angular/core';
import { BrandService } from '../../services/brand';
import { CategoryService } from '../../services/category';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.html',
})
export default class Products {
  private readonly brandService = inject(BrandService);
  private readonly categoryService = inject(CategoryService);
  protected readonly productService = inject(ProductService);
}
