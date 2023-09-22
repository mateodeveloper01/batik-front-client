interface Product {
  category_id: string | null;
  description: string;
  id: string | null;
  picture_url: string;
  quantity: string;
  title: string;
  unit_price: string;
}

interface Shipment {
  city_name: string;
  state_name: string;
  street_name: string;
  street_number: string;
  zip_code: string;
}

interface Address {
  street_name: string;
  street_number: string;
}

interface Payer {
  address: Address;
  first_name: string;
  last_name: string;
}

export interface PropOrder {
  products: Product[];
  shipments: Shipment;
  payer: Payer;
  paymentStatus: string;
  _id:string
}
