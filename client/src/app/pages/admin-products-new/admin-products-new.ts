import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { BrandService } from '../../services/brand';
import { CategoryService } from '../../services/category';
import { AdminService } from '../../services/admin';
import type { NewProduct } from '../../types/Product';

@Component({
  selector: 'app-admin-products-new',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-products-new.html',
})
export default class AdminProductsNew {
  private readonly adminService = inject(AdminService);
  private readonly router = inject(Router);

  protected readonly brandService = inject(BrandService);
  protected readonly categoryService = inject(CategoryService);

  protected readonly submitting = signal(false);
  protected readonly error = signal('');

  submit(event: Event, form: HTMLFormElement): void {
    event.preventDefault();

    const data = new FormData(form);
    const prevPrice = String(data.get('prevPrice') ?? '').trim();
    const publishedAt = String(data.get('publishedAt') ?? '');

    const body: NewProduct = {
      title: String(data.get('title') ?? '').trim(),
      description: String(data.get('description') ?? '').trim(),
      gender: String(data.get('gender') ?? '') as NewProduct['gender'],
      sku: String(data.get('sku') ?? '').trim(),
      price: Number(data.get('price')),
      prevPrice: prevPrice ? Number(prevPrice) : null,
      categoryId: Number(data.get('categoryId')),
      brandId: Number(data.get('brandId')),
      publishedAt: publishedAt ? new Date(publishedAt).toISOString() : undefined,

      images: String(data.get('images') ?? '')
        .split('\n')
        .map((url) => url.trim())
        .filter(Boolean),
    };

    this.error.set('');
    this.submitting.set(true);

    this.adminService
      .createProduct(body)

      .pipe(finalize(() => this.submitting.set(false)))

      .subscribe({
        next: () => this.router.navigate(['/admin/products']),
        error: (error) => this.error.set(error.message),
      });
  }
}
