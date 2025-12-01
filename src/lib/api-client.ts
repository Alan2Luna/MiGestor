import type { AxiosClient } from "@/types/api";
import Axios from "axios";

export const api = Axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    "x-api-key": import.meta.env.VITE_API_KEY,
  },
}) as AxiosClient;

api.interceptors.response.use(
  (response) => { return response.data },
  (error) => { 
    console.log("INTERCEPTOR: ", error)
    return Promise.reject(error);
  }
);