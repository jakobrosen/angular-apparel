import { Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';

export interface Brand {
  id: number;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class BrandService {
  readonly brands = httpResource<Brand[]>(() => '/api/brands', { defaultValue: [] });
}
