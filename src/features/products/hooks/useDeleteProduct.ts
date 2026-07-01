import { productService } from "../api/productService";
import { useMutation } from "@tanstack/react-query";
import {useQueryClient } from '@tanstack/react-query';
export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: productService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};