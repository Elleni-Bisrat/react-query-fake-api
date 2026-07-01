import { useCreateProduct } from "../hooks/useCreateProduct";
import { ProductForm } from "../components/ProductForm";
import { useNavigate } from "react-router-dom";
import type { ProductFormData } from "../schemas/product.schema";
export const CreateProductPage = () => {
  const navigate = useNavigate();
  const createProduct = useCreateProduct();

  const onSubmit = (data: ProductFormData) => {
    createProduct.mutate(data, {
      onSuccess: () => navigate("/products"),
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create Product</h1>
      <ProductForm onSubmit={onSubmit} isLoading={createProduct.isPending} />
    </div>
  );
};
