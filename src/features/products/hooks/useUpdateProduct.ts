import { useMutation, useQueryClient } from '@tanstack/react-query';
import { productService } from '../api/productService';
import type { ProductFormData } from '../schemas/product.schema';
export const productKeys = {
  all: ['products'] as const,
  details: () => [...productKeys.all, 'detail'] as const,
  detail: (id: string) => [...productKeys.details(), id] as const,
};
export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: ProductFormData }) =>
      productService.update(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries( {queryKey: productKeys.all});
      queryClient.invalidateQueries({ queryKey: productKeys.detail(variables.id) });
    },
  });
};