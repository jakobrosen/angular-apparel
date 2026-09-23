import { Component, computed, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { phosphorTrash } from '@ng-icons/phosphor-icons/regular';
import { productSlug } from '../../utilities/slug';
import { AdminService } from '../../services/admin';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, NgIcon],
  providers: [provideIcons({ phosphorTrash })],
  templateUrl: './admin-products.html',
})
export default class AdminProducts {
  private readonly adminService = inject(AdminService);

  protected readonly products = this.adminService.allProducts();

  protected readonly items = computed(() => this.products.value().data);

  protected readonly total = computed(() => this.products.value().pagination.total);

  // Exponeras för mallen, som bygger länken till produktsidan.
  protected readonly productSlug = productSlug;

  // Tar bort produkten och hämtar om listan.
  protected remove(id: number): void {
    this.adminService.deleteProduct(id).subscribe(() => this.products.reload());
  }
}
