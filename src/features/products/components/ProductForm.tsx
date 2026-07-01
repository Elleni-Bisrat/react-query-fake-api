import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import  { productSchema } from '../schemas/product.schema';
import  type { ProductFormData } from '../schemas/product.schema';

interface ProductFormProps {
  defaultValues?: Partial<ProductFormData>;
  onSubmit: (data: ProductFormData) => void;
  isLoading?: boolean;
}

export const ProductForm = ({ defaultValues, onSubmit, isLoading }: ProductFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block">Name</label>
        <input {...register('name')} className="border p-2 w-full" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div>
        <label className="block">Price</label>
        <input {...register('price', { valueAsNumber: true })} type="number" className="border p-2 w-full" />
        {errors.price && <p className="text-red-500">{errors.price.message}</p>}
      </div>
      <div>
        <label className="block">Description</label>
        <textarea {...register('description')} className="border p-2 w-full" />
      </div>
      <button type="submit" disabled={isLoading} className="bg-blue-500 text-white p-2 rounded">
        {isLoading ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
};