import { productService } from "../api/productService";
import { useMutation } from "@tanstack/react-query";

export const useDeleteProduct = ()=>{
    return useMutation({
        mutationFn:productService.deleteProduct
    });
}