import axios from "axios";
import { env } from "./env.mjs";
export const mekeRequest = axios.create({
  baseURL: env.NEXT_PUBLIC_BACKEND_BASE_URL,
  headers: {
    Authorization: "bearer " + env.NEXT_PUBLIC_API_TOKEN,
  },
});
