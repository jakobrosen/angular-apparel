/**
 * Shape of brand data sent by API clients.
 */
export interface BrandInput {
  name: string;
}

/**
 * Shape of a brand as returned from the API.
 */
export interface BrandOutput {
  id: number;
  name: string;
  created_at: string;
}
