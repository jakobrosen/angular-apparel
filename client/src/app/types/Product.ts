// En produkt så som GET /api/products returnerar den.
export interface Product {
  id: number;
  title: string;
  description: string;
  gender: 'men' | 'women';
  price: number;
  prevPrice: number | null;
  sku: string;
  category: string | null;
  brand: string | null;
  images: string[];
  publishedAt: string;
}

// Responsen som APIt returnerar.
export interface ProductResponse {
  pagination: { page: number; limit: number; total: number; totalPages: number };
  data: Product[];
}

// Bodyn som skickas vid POST /api/admin/products.
export interface NewProduct {
  title: string;
  description: string;
  gender: Product['gender'];
  sku: string;
  price: number;
  prevPrice: number | null;
  categoryId: number;
  brandId: number;
  images: string[];
}
