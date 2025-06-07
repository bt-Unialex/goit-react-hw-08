// import css from './App.module.css';
import { Flip, ToastContainer } from 'react-toastify';

import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { useDispatch } from 'react-redux';

import { fetchContacts } from './redux/contacts/operations';

import HomePage from './pages/HomePage/HomePage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';

import Layout from './components/Layout/Layout';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
