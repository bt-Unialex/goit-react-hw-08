// import css from './App.module.css';
import { Flip, ToastContainer } from 'react-toastify';

import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from './redux/contacts/operations';

import HomePage from './pages/HomePage/HomePage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';

import Layout from './components/Layout/Layout';
import { authRefresh } from './redux/auth/operations';
import { selectAuthToken, selectIsLoggedIn } from './redux/auth/selectors';

export default function App() {
  const dispatch = useDispatch();
  const isLogedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectAuthToken);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (token && !isLogedIn) dispatch(authRefresh(token));
  }, [dispatch, token, isLogedIn]);

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
        <ToastContainer newestOnTop={true} closeOnClick={true} theme="colored" transition={Flip} />
      </Layout>
    </>
  );
}
