export interface PropsItem {
  price: number;
  oldPrice?: number;
  title: string;
  isNew?: boolean;
  id?: string | never;
  img: any;
  img2?: any;
  quantity?: number;
  description: string;
  _id?: string;
}

export interface PropsCategories {
  description: string;
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
