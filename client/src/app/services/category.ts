import { Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';

export interface Category {
  id: number;
  name: string;
}

// Injectable som hämtar alla kategorier från backenden.
// providedIn: 'root' innebär att endast en instans av
// denna injectable kan finnas i hela applikationen,
// så det blir ett HTTP-anrop vid varje page reload.
@Injectable({ providedIn: 'root' })
export class CategoryService {
  readonly categories = httpResource<Category[]>(() => '/api/categories', { defaultValue: [] });
}
