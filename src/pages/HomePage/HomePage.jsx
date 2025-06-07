import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './HomePage.module.css';

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <h2 className={css.title}>
          Welcome to contacts book{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h2>
        {!isLoggedIn && <p className={css.title}>Please, register or log in!</p>}
      </div>
    </div>
  );
}
