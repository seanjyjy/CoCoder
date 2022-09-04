import { useContext } from 'react';
import { Navigate, PathRouteProps, Route, useLocation, useNavigate } from 'react-router-dom';
import Loading from 'src/components/Loading';
import { UserContext } from 'src/hooks/UserContext';

export enum RoutePath {
  BASE = '/',
  SIGNUP = '/signup',
  LOGIN = '/login',
  HOME = '/home',
}

export const PrivateRoute = (props: PathRouteProps) => {
  const { user, isLoading } = useContext(UserContext);
  const navigate = useNavigate();
  console.log(user, isLoading);

  if (!user) {
    navigate(RoutePath.LOGIN);
  }

  return <Route {...props} />;
};

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const { user, isLoading } = useContext(UserContext);

  if (isLoading) {
    return <Loading />;
  }
  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={RoutePath.LOGIN} state={{ from: location }} />;
  }

  return children;
};
