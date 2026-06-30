import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../layouts/MianLayout";

import { ProductsPage } from "../../features/products/pages/ProductsPage";
import { CreateProductPage } from "../../features/products/pages/CreateProductPage";
import { HomePage } from "../../features/products/components/HomePage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },

      {
        path: "/products/create",
        element: <CreateProductPage />,
      },
    ],
  },
]);
