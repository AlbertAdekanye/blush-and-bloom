export type ProductCategory =
  | "Nightwear"
  | "Gymwear"
  | "Keyholders"
  | "Accessories";

export interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  price: number;
  image: string;
  isNew?: boolean;
}
