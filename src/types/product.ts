export type ProductCategory =
  | "Nightwear"
  | "Bras & Panties"
  | "Gymwear"
  | "Beauty"
  | "Perfume & Oils"
  | "Accessories";

export interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  price: number;
  image: string;
  isNew?: boolean;
}
