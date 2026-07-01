// import { Navigate } from "react-router-dom";
// import { authStorage } from "../../infrastructure/storage/auth.storage";
// import { PATHS } from "../routes/paths";

// type props = {
//     children:React.ReactNode;
// }
// export function ProtectedRoute({children}:props){
//     const token = authStorage.getToken();
//     if(!token){
//         return <Navigate to={PATHS.LOGIN} />
//     }
//     return children;
// }
import { Navigate, Outlet } from 'react-router-dom';
import { useCurrentUser } from '../../features/auth/hooks/useAuth';

export const ProtectedRoute = () => {
  const { data: user, isLoading } = useCurrentUser();

  if (isLoading) return <div>Checking authentication...</div>;

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};