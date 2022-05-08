import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

function ProtectedRoute() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="login" />;
}

export default ProtectedRoute;
