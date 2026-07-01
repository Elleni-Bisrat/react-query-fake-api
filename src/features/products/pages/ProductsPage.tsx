import { useProducts } from "../hooks/useProducts";
import { useDeleteProduct } from "../hooks/useDeleteProduct";
import { ProductList } from "../components/ProductList";
import { Link, useNavigate } from "react-router-dom";

export const ProductsPage = () => {
  const { data: products, isLoading, error } = useProducts();
  const deleteProduct = useDeleteProduct();

  const navigate = useNavigate();
  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products</div>;
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link
          to="/products/create"
          className="bg-green-500 text-white p-2 rounded"
        >
          Add Product
        </Link>
      </div>
      <ProductList
        products={products || []}
        onEdit={(product) => navigate(`/products/${product.id}/edit`)}
        onDelete={(id) => deleteProduct.mutate(id)}
      />
    </div>
  );
};
