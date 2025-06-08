import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router';

export default function RestrictedRoute({ page }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return !isLoggedIn ? page : <Navigate to={'/contacts'} />;
}
