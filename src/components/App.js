import { useEffect, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Layout from 'components/Layout';
import ProtectedRoute from 'components/ProtectedRoute';
import PublicRoute from 'components/PublicRoute';
import { authOperations } from 'redux/auth';

const HomeView = lazy(() => import('../views/HomeView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView'));
const ContactsView = lazy(() => import('../views/ContactsView'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />

        <Route element={<PublicRoute />}>
          <Route path="register" element={<RegisterView />} />
        </Route>

        <Route element={<PublicRoute />}>
          <Route path="login" element={<LoginView />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="contacts" element={<ContactsView />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
