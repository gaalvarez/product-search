export interface SearchResult {
  author: Author;
  categories: Category[];
  items: Item[];
}

export interface Author {
  name: string;
  lastname: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
}

export interface Price {
  currency: string;
  amount: number;
  decimals: number;
}
