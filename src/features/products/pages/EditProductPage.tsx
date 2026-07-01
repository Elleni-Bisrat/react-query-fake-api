import { useNavigate, useParams } from "react-router-dom";
import { ProductForm } from "../components/ProductForm";
import { useProduct } from "../hooks/useProducts";
import { useUpdateProduct } from "../hooks/useUpdateProduct";
import type { ProductFormData } from "../schemas/product.schema";

export const EditProductPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { data: product, isLoading } = useProduct(id!);

  const updateProduct = useUpdateProduct();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  const onSubmit = (data: ProductFormData) => {
    updateProduct.mutate(
      {
        id: id!,
        data,
      },
      {
        onSuccess: () => {
          navigate("/products");
        },
      }
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Edit Product
      </h1>

      <ProductForm
        defaultValues={product}
        onSubmit={onSubmit}
        isLoading={updateProduct.isPending}
      />
    </div>
  );
};