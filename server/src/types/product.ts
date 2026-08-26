export interface ProductInput {
  images: string[];
  gender: string;
  category: string;
  title: string;
  prevPrice?: number;
  price: number;
  description: string;
  discount?: boolean;
  brand: string;
}
