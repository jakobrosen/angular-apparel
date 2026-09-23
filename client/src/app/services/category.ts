import { Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { Category } from '../types/Category';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  readonly categories = httpResource<Category[]>(() => '/api/categories', { defaultValue: [] });
}
