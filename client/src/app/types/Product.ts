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
  createdAt: string;
}
