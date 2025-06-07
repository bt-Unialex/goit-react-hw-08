import AppBar from '../AppBar/AppBar';
import css from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Phonebook</h1>
      <AppBar />
      {children}
    </div>
  );
}
