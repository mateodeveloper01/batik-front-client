export interface PropsItem {
  price: number;
  oldPrice?: number;
  title: string;
  new?: boolean;
  id?: string | never;
  img: any;
  quantity: number;
  description: string;
  _id?: string | never;
  isStock?: boolean;
}

export interface PropsCategories {
  description: string;
  img: any;
  title: string;
  _id: string;
}
export interface PropsSubCategories {
  title: string;
  _id: string;
}

export interface PropsItemCart {
  price: number;
  title: string;
  isNew: boolean;
  id: string | never;
  img: any;
  quantity: number;
  description: string;
  // _id:string
}
export interface PropStateProducts {
  cart: { products: [PropsItem] };
}
