import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

function PublicRoute() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? <Navigate to="contacts" /> : <Outlet />;
}

export default PublicRoute;
