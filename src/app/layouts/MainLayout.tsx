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
        <Link to="/orders">Orders</Link> {" | "}
        <Link to="/login">Login</Link>
      </nav>

      <hr />

      <Outlet />
    </>
  );
}

// import { Outlet, Link } from 'react-router-dom';
// import { useCurrentUser, useLogout } from '../../features/auth/hooks/useAuth';

// export const MainLayout = () => {
//   const { data: user } = useCurrentUser();
//   const logout = useLogout();

//   return (
//     <div className="min-h-screen flex flex-col">
//       <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
//         <div className="space-x-4">
//           <Link to="/" className="hover:underline">Home</Link>
//           <Link to="/products" className="hover:underline">Products</Link>
//           <Link to="/orders" className="hover:underline">Orders</Link>
//         </div>
//         <div>
//           {user ? (
//             <div className="flex items-center space-x-4">
//               <span>{user.name}</span>
//               <button onClick={() => logout.mutate()} className="bg-red-500 px-3 py-1 rounded">
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <Link to="/login" className="hover:underline">Login</Link>
//           )}
//         </div>
//       </nav>
//       <main className="flex-1 p-6 bg-gray-50">
//         <Outlet />
//       </main>
//     </div>
//   );
// };