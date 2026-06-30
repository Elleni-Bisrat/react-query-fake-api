import { productService } from "../api/productService";
import { useMutation } from "@tanstack/react-query";
export const useUpdateProduct = () => {
    return useMutation({
        mutationFn:productService.updateProduct
    });
}