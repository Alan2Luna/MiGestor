import type { AxiosInstance, AxiosRequestConfig } from "axios";
import type { User } from "./User";

export interface ApiUserResponse {
  data: User;
}

export interface ApiUsersResponse<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T;
}

export interface AxiosClient extends AxiosInstance {
  get<T = unknown, R = T>(url: string, config?: AxiosRequestConfig): Promise<R>;
  post<T = unknown, R = T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<R>;
  put<T = unknown, R = T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<R>;
  delete<T = unknown, R = T>(url: string, config?: AxiosRequestConfig): Promise<R>;
}