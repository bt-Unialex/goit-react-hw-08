import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import css from './AppBar.module.css';

export default function AppBar() {
  const isLogedIn = true;
  return (
    <nav className={css.wrapper}>
      <Navigation />
      {isLogedIn ? <UserMenu /> : <AuthNav />}
    </nav>
  );
}
