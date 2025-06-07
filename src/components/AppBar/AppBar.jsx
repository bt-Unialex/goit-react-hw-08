import css from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.wrapper}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </nav>
  );
}
