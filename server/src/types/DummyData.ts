export interface DummyProduct {
  gender: string;
  categoryId: number;
  categoryName: string;
  type: string;
  brandId: number;
  brandName: string;
  title: string;
  price: number;
  prevPrice: number | null;
  description: string;
  sku: string;
}

export interface DummyBrand {
  name: string;
}

export interface DummyCategory {
  name: string;
}

export interface DummyImage {
  url: string;
  sku: string;
}
