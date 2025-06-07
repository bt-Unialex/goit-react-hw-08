import css from './HomePage.module.css';

export default function HomePage() {
  const isLogedIn = true;
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <h2 className={css.title}>
          Welcome to contacts book{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h2>
        {!isLogedIn && <p className={css.title}>Please, register or log in!</p>}
      </div>
    </div>
  );
}
