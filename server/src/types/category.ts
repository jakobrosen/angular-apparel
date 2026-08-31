/**
 * Shape of category data sent by API clients.
 */
export interface CategoryInput {
  name: string;
}

/**
 * Shape of a category as returned from the API.
 */
export interface CategoryOutput {
  id: number;
  name: string;
  created_at: string;
}
