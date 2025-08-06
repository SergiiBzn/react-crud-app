import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

const ProtectedLayout = () => {
  
  const { isAuthenticated, loading } = useAuth();

  
  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  
  if (!isAuthenticated) {
    return <Navigate to="signin" replace />;
  }

  
  return <Outlet />;
};

export default ProtectedLayout;