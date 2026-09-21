import { Component, computed, inject } from '@angular/core';
import { ProductService } from '../../services/product';

@Component({
  imports: [],
  selector: 'app-product-grid-header',
  styleUrl: './product-grid-header.css',
  templateUrl: './product-grid-header.html',
})
export class ProductGridHeader {
  readonly productService = inject(ProductService);

  HEADER_STRUCTURE = ['q', 'gender', 'category', 'brand', 'new', 'discount'];

  private parseHeaderSection(key: string): string {
    const rawSection: string | undefined = this.productService.queryParams()[key];

    if (key == 'discount' && rawSection == 'true') return 'DISCOUNT';
    if (key == 'new' && rawSection == 'true') return 'NEW';

    return rawSection ? rawSection.split(',').join(' + ') : '';
  }

  private parseHeader(keys: string[]): string {
    const parsedHeader: string[] = [];

    for (const key of keys) {
      const section = this.parseHeaderSection(key);
      if (section) parsedHeader.push(section);
    }

    if (!parsedHeader.length) return 'ALL PRODUCTS';
    return parsedHeader.join(' · ');
  }

  readonly headerText = computed(() => this.parseHeader(this.HEADER_STRUCTURE));
}
