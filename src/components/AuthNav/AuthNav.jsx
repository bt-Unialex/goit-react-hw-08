import { NavLink } from 'react-router';
import css from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div className={css.wrapper}>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
}
