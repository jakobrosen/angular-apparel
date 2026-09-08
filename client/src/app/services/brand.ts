import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Brand {
  id: number;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class BrandService {
  private readonly http = inject(HttpClient);

  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>('/api/brands');
  }
}
