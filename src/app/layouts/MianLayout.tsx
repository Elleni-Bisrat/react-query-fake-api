import { Link, Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> {" | "}
        <Link to="/products">Products</Link>
        {" | "}
        <Link to="/products/create">Create Product</Link>
        {" | "}
        <Link to="/orders">Orders</Link>
      </nav>

      <hr />

      <Outlet />
    </>
  );
}
