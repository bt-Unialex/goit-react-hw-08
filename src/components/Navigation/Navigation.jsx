import { NavLink } from 'react-router';
import css from './Navigation.module.css';

export default function Navigation() {
  const isLogedIn = true;

  return (
    <div className={css.wrapper}>
      <NavLink to="/">Home</NavLink>
      {isLogedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </div>
  );
}
