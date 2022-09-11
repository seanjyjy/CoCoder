import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'src/services/RoutingService';
import { userLogout } from 'src/services/UserService';
import { UserContext } from './UserContext';

export default function useLogout() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const logoutUser = async () => {
    try {
      await userLogout().then((res) => {
        console.log(res);
        navigate(RoutePath.BASE);
        setUser && setUser(null);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return logoutUser;
}
