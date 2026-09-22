import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { finalize } from 'rxjs';
import { BrandService } from '../../services/brand';
import { CategoryService } from '../../services/category';

@Component({
  selector: 'app-admin-products-new',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-products-new.html',
})
export default class AdminProductsNew {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  protected readonly brandService = inject(BrandService);
  protected readonly categoryService = inject(CategoryService);

  protected readonly submitting = signal(false);
  protected readonly error = signal('');

  submit(event: Event, form: HTMLFormElement): void {
    event.preventDefault();

    // FormData hämtar alla formens fält på en gång.
    const data = new FormData(form);
    const prevPrice = String(data.get('prevPrice') ?? '').trim();

    const body = {
      title: String(data.get('title') ?? '').trim(),
      description: String(data.get('description') ?? '').trim(),
      gender: String(data.get('gender') ?? ''),
      sku: String(data.get('sku') ?? '').trim(),
      price: Number(data.get('price')),
      prevPrice: prevPrice ? Number(prevPrice) : null,
      categoryId: Number(data.get('categoryId')),
      brandId: Number(data.get('brandId')),

      images: String(data.get('images') ?? '')
        .split('\n')
        .map((url) => url.trim())
        .filter(Boolean),
    };

    this.error.set('');
    this.submitting.set(true);

    this.http
      // .post returnerar en observable som inte gör något. Man måste
      // prenumerera på den för att koden ska köras.
      .post('/api/admin/products', body)

      // Med .pipe kan man koppla på operatorer för en observable-ström.
      // finalize motsvarar "finally" hos en promise och körs efter
      // strömmen är avslutad.
      .pipe(finalize(() => this.submitting.set(false)))

      // Här startar vi anropet genom att prenumerera på observablen med
      // .subscribe. "next" definierar vad som ska hända om anropet lyckas,
      // och "error" vad som händer vid fel.
      .subscribe({
        next: () => this.router.navigate(['/admin/products']),
        error: (error) => this.error.set(error.message),
      });
  }
}
