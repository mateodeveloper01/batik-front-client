import { z } from "zod";
import provinceList from "~/global/provinceList";
import { PropsItemCart } from "./schemasProducts";

export const schemaShipment = z.object({
  name: z.string().min(3),
  surname: z.string().min(3),

  phone_number: z.string().optional(),
  phone_area_code: z.string().min(4),
  shippingMethod: z.enum(["envio"]),
  shippingPrice:z.number().optional(),
  province: z.string(),
  city: z.string().min(4),
  street_name: z.string().min(4),
  street_number: z.string().min(3),
  zip_code: z.string().min(4),
  floor: z.string().optional(),
  department: z.string().optional(),
  observations: z.string().optional(),
});

export const schemaRetiro = z.object({
  name: z.string().min(3),
  surname: z.string().min(3),

  phone_number: z.string().optional(),
  phone_area_code: z.string().min(4),
  shippingMethod: z.enum(["retiro"]),
});
export type fieldValuesShipment = z.infer<typeof schemaShipment>;
export type fieldValuesretiro = z.infer<typeof schemaRetiro>;

export const schemaBilling = z.object({
  name: z.string().min(4),
  surname: z.string().min(4),

  phone_area_code: z.string().min(3),
  phone_num: z.string().min(6),

  identification_type: z.enum(["DNI", "CUIL"]),
  identification_num: z.string().min(8),

  zip_code: z.string().min(3),
  street_name: z.string().min(4),
  street_number: z.string().min(3),
});
export type fieldValuesBilling = z.infer<typeof schemaBilling>;

export const schemaIdentification = z.object({
  identification_type: z.enum(["DNI", "CUIL"]),
  identification_num: z.string(),
});
export type fieldValuesIdentification = z.infer<typeof schemaIdentification>;

export interface PropStateOrder {
  order: {
    order: {
      shipping: fieldValuesShipment | fieldValuesretiro;
      products: PropsItemCart[];
      billing: fieldValuesBilling;
    };
  };
}
export interface PropStateUser {
  user: { user: { email: string; username: string } };
}

export interface ApiResponse {
  data: {
    paqarClasico: {
      aSucursal: number;
      aDomicilio: number;
    };
  };
  status: number;
  statusText: string;
  headers: {
    [key: string]: string;
  };
  config: {
    transitional: {
      silentJSONParsing: boolean;
      forcedJSONParsing: boolean;
      clarifyTimeoutError: boolean;
    };
    adapter: string[];
    transformRequest: null[];
    transformResponse: null[];
    timeout: number;
    xsrfCookieName: string;
    xsrfHeaderName: string;
    maxContentLength: number;
    maxBodyLength: number;
    env: {};
    headers: {
      Accept: string;
      'Content-Type': string;
      'X-RapidAPI-Key': string;
      'X-RapidAPI-Host': string;
    };
    method: string;
    url: string;
    data: string;
  };
  request: {};
}