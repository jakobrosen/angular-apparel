import { Component, computed, inject, input, linkedSignal } from '@angular/core';
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
import { CartService } from '../../services/cart';
import { ProductService } from '../../services/product';

// Antal produkter i product-carousel.
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
  protected readonly cartService = inject(CartService);
  private readonly productService = inject(ProductService);

  // Input för att mata in en slug. Detta är vad som styr vilken
  // produkt som visas.
  slug = input.required<string>();

  protected readonly relatedLimit = RELATED_LIMIT;

  // Plockar ut ID för att kunna anropa getProductById i backenden.
  protected readonly productId = computed(() => productIdFromSlug(this.slug()));
  protected readonly product = this.productService.productById(this.productId);

  // Liknande produkter, alltså samma kön och kategori som den aktiva.
  // +1 eftersom den aktiva produkten filtreras bort i karusellen.
  protected readonly relatedProducts = this.productService.relatedProducts(
    this.product.value,
    RELATED_LIMIT + 1,
  );

  // Styr knappens text och färg.
  protected readonly inCart = computed(() => {
    const id = this.product.value()?.id;
    return this.cartService.items().some((item) => item.product.id === id);
  });

  protected readonly images = computed(() => this.product.value()?.images ?? []);

  // Signal som styr vilken bild som visas. Routen återanvänder
  // komponenten mellan produkter, så den nollställs på ny slug.
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

  // Parsear brand name, t.ex "new-balance" till "new balance".
  protected readonly brand = computed(() => this.product.value()?.brand?.replace(/-/g, ' ') ?? '');

  // Funktion för att bläddra bland bilderna.
  protected step(delta: number): void {
    const count = this.images().length;
    if (!count) return;

    // Uträkning som gör det möjligt att "hoppa tillbaka" när man försöker
    // bläddra till nästa bild trots att man kommit till slutet,
    // och vice versa.
    this.imageIndex.update((index) => (index + delta + count) % count);
  }
}
