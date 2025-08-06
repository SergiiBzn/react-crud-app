import { Navigate, Outlet } from 'react-router';

const ProtectedRoutes = () => {
  const token = localStorage.getItem('token');

  return token ? <Outlet /> : <Navigate to='/Signin' replace />;
};

export default ProtectedRoutes;
