import { Component, computed, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient, httpResource } from '@angular/common/http';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { phosphorTrash } from '@ng-icons/phosphor-icons/regular';
import type { ProductResponse } from '../../types/Product';
import { productSlug } from '../../utilities/slug';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, NgIcon],
  providers: [provideIcons({ phosphorTrash })],
  templateUrl: './admin-products.html',
})
export default class AdminProducts {
  private readonly http = inject(HttpClient);

  protected readonly products = httpResource<ProductResponse>(() => ({
    url: '/api/products',
    params: { limit: 500 },
  }));

  protected readonly items = computed(() => this.products.value()?.data ?? []);

  protected readonly total = computed(() => this.products.value()?.pagination.total ?? 0);

  // Exponeras för mallen, som bygger länken till produktsidan.
  protected readonly productSlug = productSlug;

  // Tar bort produkten och hämtar om listan.
  protected remove(id: number): void {
    this.http.delete(`/api/admin/products/${id}`).subscribe(() => this.products.reload());
  }
}
