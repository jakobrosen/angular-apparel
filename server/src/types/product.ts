/**
 * Shape of product data sent by API clients (e.g. from dummyData.ts).
 * Uses camelCase property names and optional fields for category/brand.
 */
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

/**
 * Shape of a product image row from the `product_images` table.
 */
export interface ProductImage {
  id: number;
  product_id: number;
  url: string;
  is_main: boolean;
  sort_order: number;
}

/**
 * Shape of a product as returned from the API.
 * Includes an embedded `images` array from the `product_images` table.
 */
export interface ProductOutput {
  id: number;
  title: string;
  description: string;
  gender: string;
  price: number;
  prev_price: number | null;
  discount: boolean;
  created_at: string;
  category_name: string;
  brand_name: string;
  images: ProductImage[];
}

/**
 * Shape accepted by the repository's `create` and `update` methods.
 * Uses snake_case DB column names with optional fields for category/brand.
 */
export interface ProductCreate {
  title: string;
  description: string;
  gender: string;
  price: number;
  prev_price?: number | null;
  discount?: boolean;
  category_name?: string;
  brand_name?: string;
}
