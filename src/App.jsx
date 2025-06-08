import { Flip, ToastContainer } from 'react-toastify';

import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import HomePage from './pages/HomePage/HomePage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Layout from './components/Layout/Layout';

import { refreshUser } from './redux/auth/operations';
import { selectAuthToken, selectIsLoggedIn } from './redux/auth/selectors';

export default function App() {
  const dispatch = useDispatch();
  const isLogedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectAuthToken);

  useEffect(() => {
    if (token && !isLogedIn) dispatch(refreshUser(token));
  }, [dispatch, token, isLogedIn]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
      <ToastContainer newestOnTop={true} closeOnClick={true} theme="colored" transition={Flip} />
    </Layout>
  );
}
