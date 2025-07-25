import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectContactsError, selectFilteredContacts, selectLoadingContacts } from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoadingContacts);
  const isError = useSelector(selectContactsError);

  return (
    (isLoading && <b>Loading...</b>) ||
    (isError && <b>{isError}</b>) || (
      <ul className={css.wrapper}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    )
  );
}
