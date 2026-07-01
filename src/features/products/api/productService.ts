import { apiClient } from "../../../infrastructure/api/apiClient";
import { ENDPOINTS } from "../../../infrastructure/api/endpoints";
import type { Product } from "../../../domain/entities/Product";
import type { ProductFormData } from "../schemas/product.schema";

export const productService = {
  getAll: async (): Promise<Product[]> => {
    const response = await apiClient.get<Product[]>(ENDPOINTS.PRODUCTS);
    return response.data;
  },

  getOne: async (id: string): Promise<Product> => {
    const response = await apiClient.get<Product>(
      `${ENDPOINTS.PRODUCTS}/${id}`
    );
    return response.data;
  },

  create: async (data: ProductFormData): Promise<Product> => {
    const response = await apiClient.post<Product>(
      ENDPOINTS.PRODUCTS,
      data
    );
    return response.data;
  },

  update: async (
    id: string,
    data: ProductFormData
  ): Promise<Product> => {
    const response = await apiClient.put<Product>(
      `${ENDPOINTS.PRODUCTS}/${id}`,
      data
    );

    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`${ENDPOINTS.PRODUCTS}/${id}`);
  },
};