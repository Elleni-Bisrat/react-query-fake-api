import type { Product } from "../../../domain/entities/Product";

interface ProductListProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

export const ProductList = ({ products, onEdit, onDelete }: ProductListProps) => {
  return (
    <ul className="space-y-2">
      {products.map((product) => (
        <li key={product.id} className="border p-4 rounded flex justify-between items-center">
          <div>
            <h3 className="font-semibold">{product.name}</h3>
            <p>${product.price}</p>
            {product.description && <p className="text-sm text-gray-600">{product.description}</p>}
          </div>
          <div>
            <button onClick={() => onEdit(product)} className="text-blue-500 mr-2">Edit</button>
            <button onClick={() => onDelete(product.id)} className="text-red-500">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};