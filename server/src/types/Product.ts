export type RawProduct = {
  id: number;
  title: string;
  description: string;
  gender: string;
  price: number;
  prevPrice: number | null;
  sku: string;
  categoryId: number | null;
  brandId: number | null;
  publishedAt: Date;
  createdAt: string;
  updatedAt: string;
  category: { name: string } | null;
  brand: { name: string } | null;
  images: { url: string }[];
};

export type ParsedProduct = {
  id: number;
  title: string;
  description: string;
  gender: string;
  price: number;
  prevPrice: number | null;
  sku: string;
  categoryId: number | null;
  brandId: number | null;
  publishedAt: Date;
  createdAt: string;
  updatedAt: string;
  category: string | null;
  brand: string | null;
  images: string[];
};
