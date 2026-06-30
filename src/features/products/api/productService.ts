import { apiClient } from "../../../infrastructure/api/apiClient";
import type { Product } from "../../../domain/entities/Product";

export const productService = {
  getProducts() {
    return apiClient.get<Product[]>("/products");
  },

  createProduct(data: Omit<Product, "id">) {
    return apiClient.post("/products", data);
  },
  updateProduct(id: number) {
    return apiClient.patch(`/products/${id}`);
  },

  deleteProduct(id: number) {
    return apiClient.delete(`/products/${id}`);
  },
};
