import { Component, computed, inject } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { phosphorTrash } from '@ng-icons/phosphor-icons/regular';
import { productSlug } from '../../utilities/slug';
import { AdminService } from '../../services/admin';
import { AuthService } from '../../services/auth';
import type { Product } from '../../types/Product';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, RouterLink, NgIcon],
  providers: [provideIcons({ phosphorTrash })],
  templateUrl: './admin-products.html',
})
export default class AdminProducts {
  private readonly adminService = inject(AdminService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  protected readonly products = this.adminService.allProducts();

  protected readonly items = computed(() => this.products.value().data);

  protected readonly total = computed(() => this.products.value().pagination.total);

  protected readonly productSlug = productSlug;

  protected isScheduled(product: Product): boolean {
    return new Date(product.publishedAt).getTime() > Date.now();
  }

  protected logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/admin/login');
  }

  protected remove(id: number): void {
    this.adminService.deleteProduct(id).subscribe(() => this.products.reload());
  }
}
