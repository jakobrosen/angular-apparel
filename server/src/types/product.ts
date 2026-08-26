export interface ProductInput {
  images: string[];
  gender: string;
  category?: string;
  brand?: string;
  title: string;
  prevPrice?: number;
  price: number;
  description: string;
  discount?: boolean;
}
