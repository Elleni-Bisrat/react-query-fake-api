import { useForm } from "react-hook-form";
import { useCreateProduct } from "../hooks/useCreateProduct";
// import { useNavigate } from "react-router-dom";

type ProductFormData = {
  name: string;
  category: string;
  price: number;
};

export function ProductForm() {
  const { mutate } = useCreateProduct();
// const navigate = useNavigate();
  const { register, handleSubmit } =
    useForm<ProductFormData>();

  const onSubmit = (data: ProductFormData) => {
    mutate(data);
  };
  // const onSubmit = (data: ProductFormData) => {
  //   mutate(data,{
  //     onSuccess:()=>{
  //       navigate("/products");
  //     }
  //   });
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("name")}
        placeholder="Name"
      />

      <input
        {...register("category")}
        placeholder="Category"
      />

      <input
        type="number"
        {...register("price", {
          valueAsNumber: true,
        })}
        placeholder="Price"
      />

      <button type="submit">
        Create Product
      </button>
    </form>
  );
}