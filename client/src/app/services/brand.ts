import { Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { Brand } from '../types/Brand';

@Injectable({ providedIn: 'root' })
export class BrandService {
  readonly brands = httpResource<Brand[]>(() => '/api/brands', { defaultValue: [] });
}
