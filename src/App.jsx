import { Flip, ToastContainer } from 'react-toastify';

import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/operations';

import Layout from './components/Layout/Layout';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { selectIsRefreshing } from './redux/auth/selectors';
// import HomePage from './pages/HomePage/HomePage';
// import ContactsPage from './pages/ContactsPage/ContactsPage';
// import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
// import LoginPage from './pages/LoginPage/LoginPage';
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <strong>Loading...</strong>
  ) : (
    <>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RestrictedRoute page={<RegistrationPage />} />} />
            <Route path="/login" element={<RestrictedRoute page={<LoginPage />} />} />
            <Route path="/contacts" element={<PrivateRoute page={<ContactsPage />} />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </Layout>
      <ToastContainer newestOnTop={true} closeOnClick={true} theme="colored" transition={Flip} />
    </>
  );
}
