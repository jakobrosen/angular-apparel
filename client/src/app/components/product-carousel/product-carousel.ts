import { Component, ElementRef, computed, input, viewChild } from '@angular/core';
import { HttpResourceRef } from '@angular/common/http';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { phosphorCaretLeft, phosphorCaretRight } from '@ng-icons/phosphor-icons/regular';
import { ProductCard } from '../product-card/product-card';
import { ProductResponse } from '../../types/Product';

@Component({
  selector: 'app-product-carousel',
  standalone: true,
  imports: [ProductCard, NgIcon],
  providers: [provideIcons({ phosphorCaretLeft, phosphorCaretRight })],
  templateUrl: './product-carousel.html',
  styleUrl: './product-carousel.css',
})
export class ProductCarousel {
  readonly products = input.required<HttpResourceRef<ProductResponse>>();

  readonly heading = input('');

  // Används för att exkludera produkten som visas i product-details
  // så att den inte dyker upp i karusellen.
  readonly exclude = input<number | null>(null);

  // Max antal kort som ska visas.
  readonly max = input(0);

  // Antal skelettkort som visas medan produkterna hämtas.
  readonly skeletons = new Array(3);

  readonly items = computed(() => {
    const excluded = this.exclude();
    const max = this.max();

    const data = this.products()
      .value()
      .data.filter((product) => product.id !== excluded);

    return max > 0 ? data.slice(0, max) : data;
  });

  private readonly track = viewChild<ElementRef<HTMLDivElement>>('track');

  // Scrollar en hel synlig bredd åt gången, alltså tre kort på desktop
  // och ett på mobil. Webbläsaren stannar själv vid kanterna.
  protected scroll(direction: -1 | 1): void {
    const element = this.track()?.nativeElement;
    if (!element) return;

    element.scrollBy({ left: direction * element.clientWidth, behavior: 'smooth' });
  }
}
