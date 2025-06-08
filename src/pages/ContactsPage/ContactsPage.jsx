import css from './ContactsPage.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLogedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLogedIn) dispatch(fetchContacts());
  }, [dispatch, isLogedIn]);

  return (
    <div className={css.wrapper}>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
