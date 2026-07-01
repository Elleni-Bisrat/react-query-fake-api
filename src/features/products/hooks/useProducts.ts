import { useQuery } from "@tanstack/react-query";
import { productService } from "../api/productService";
export const productKeys = {
  all: ["products"] as const,
  detail: (id: string) => [...["products"], id] as const,
};
export const useProducts = () => {
    return useQuery({
        queryKey: productKeys.all,
        queryFn: productService.getAll,
    });
};


export const useProduct = (id: string) => {
  return useQuery({
    queryKey: productKeys.detail(id),
    queryFn: () => productService.getOne(id),
    enabled: !!id,
  });
};