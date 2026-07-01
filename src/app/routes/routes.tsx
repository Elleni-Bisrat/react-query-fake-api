import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout";

import { HomePage } from "../../features/products/components/HomePage";
import { ProductsPage } from "../../features/products/pages/ProductsPage";
import { CreateProductPage } from "../../features/products/pages/CreateProductPage";
import { LoginPage } from "../../features/auth/pages/LoginPage";
import { PATHS } from "./paths";
import { EditProductPage } from "../../features/products/pages/EditProductPage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: PATHS.HOME,
        element: <HomePage />,
      },
      {
        path: PATHS.LOGIN,
        element: <LoginPage />,
      },
      {
        path: PATHS.PRODUCTS,
        element: <ProductsPage />,
      },
      {
        path: PATHS.EDIT,
        element: <EditProductPage />,
      },
      {
        path: PATHS.CREATE_PRODUCT,
        element: <CreateProductPage />,
      },
    ],
  },
]);