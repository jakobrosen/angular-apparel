import { Component, computed, inject, input, linkedSignal, effect } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  phosphorCaretLeft,
  phosphorCaretRight,
  phosphorHeart,
  phosphorShareNetwork,
  phosphorTruck,
} from '@ng-icons/phosphor-icons/regular';
import { productIdFromSlug } from '../../utilities/slug';
import { ProductCarousel } from '../../components/product-carousel/product-carousel';
import { Title } from '@angular/platform-browser';
import { CartService } from '../../services/cart';
import { ProductService } from '../../services/product';
import { runEffect } from '@angular/core/primitives/signals';

const RELATED_LIMIT = 8;

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, NgIcon, ProductCarousel],
  providers: [
    provideIcons({
      phosphorCaretLeft,
      phosphorCaretRight,
      phosphorHeart,
      phosphorShareNetwork,
      phosphorTruck,
    }),
  ],
  templateUrl: './product-details.html',
})
export default class ProductDetails {
  private readonly titleService = inject(Title);
  protected readonly cartService = inject(CartService);
  private readonly productService = inject(ProductService);

  slug = input.required<string>();

  protected readonly relatedLimit = RELATED_LIMIT;

  protected readonly productId = computed(() => productIdFromSlug(this.slug()));
  protected readonly product = this.productService.productById(this.productId);

  protected readonly relatedProducts = this.productService.relatedProducts(
    this.product.value,
    RELATED_LIMIT + 1,
  );

  protected readonly inCart = computed(() => {
    const id = this.product.value()?.id;
    return this.cartService.items().some((item) => item.product.id === id);
  });

  protected readonly images = computed(() => this.product.value()?.images ?? []);

  protected readonly imageIndex = linkedSignal<string, number>({
    source: this.slug,
    computation: () => 0,
  });
  protected readonly activeImage = computed(() => this.images()[this.imageIndex()] ?? '');

  protected readonly onSale = computed(() => {
    const product = this.product.value();
    if (!product) return false;
    return product.prevPrice !== null && product.price < product.prevPrice;
  });

  protected readonly discount = computed(() => {
    const product = this.product.value();
    if (!product?.prevPrice) return 0;
    return Math.round((1 - product.price / product.prevPrice) * 100);
  });

  protected readonly brand = computed(() => this.product.value()?.brand?.replace(/-/g, ' ') ?? '');

  protected step(delta: number): void {
    const count = this.images().length;
    if (!count) return;

    this.imageIndex.update((index) => (index + delta + count) % count);
  }

  constructor() {
    effect(() => {
      const product = this.product.value();
      if (product) {
        this.titleService.setTitle(product.title);
      }
    });
  }
}
