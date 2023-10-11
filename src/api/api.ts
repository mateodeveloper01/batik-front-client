import axios from "axios";
import { env } from "~/env.mjs";

const baseURL = env.NEXT_PUBLIC_BACKEND_BASE_URL;

export const getItem = async (url: string) => {
  const res = await axios.get(`${baseURL}/api${url}`);
  // console.log(res);
  return res.data.data;
};

export const addItem = async (data: any, url: string) => {
  const res = await axios.post(`${baseURL}/api${url}`, data, {
    withCredentials: true,
  });
  return res.data;
};
export const editItem = async (data: any, url: string) => {
  const res = await axios.put(`${baseURL}/api${url}`, data, {
    withCredentials: true,
  });
  return res.data;
};
export const deleteItem = async (id: string, url: string) => {
  const res = await axios.delete(`${baseURL}/api${url}/${id}`);
  return res.data.data;
};

interface Props {
  zip_code: string;
  province: string;
}

export const priceShipping = async ({
  zip_code,
  province,
}: Props): Promise<Props> => {
  try {
    const response = await axios.request({
      method: "POST",
      url: "https://correo-argentino1.p.rapidapi.com/calcularPrecio",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "56d35eded6msh6cfc0a01e00acbfp1ee7aajsn911a0919380a",
        "X-RapidAPI-Host": "correo-argentino1.p.rapidapi.com",
      },
      data: {
        cpOrigen: "5000",
        cpDestino: zip_code,
        provinciaOrigen: "AR-B",
        provinciaDestino: `AR-${province}`,
        peso: "5",
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // You might want to rethrow the error here to handle it further up the call stack.
  }
};
