import type { Product } from './Product';

// En rad i varukorgen. Produkten sparas i sin helhet så att korgen
// kan ritas upp utan att hämta om något från APIt.
export interface CartItem {
  product: Product;
  quantity: number;
}
