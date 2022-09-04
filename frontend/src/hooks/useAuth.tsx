import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { UserContext } from './UserContext';
import { RoutePath } from 'src/services/RoutingService';
import { getCurrentUser, userLogin, userSignUp } from 'src/services/UserService';
import { STATUS_CODE_CREATED } from 'src/constants';
import { IAppError, IUserDTO } from '../../../common/Models';

export default function useAuth() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [error, setError] = useState<string[]>([]);

  if (user) {
    navigate(RoutePath.HOME);
  }

  //set user in context and nagivate to home
  const setUserContext = async () => {
    return await getCurrentUser()
      .then((res) => {
        if (setUser == null) {
          setError(['Please try again later!']);
          return;
        }
        setUser(res.data.currentUser);
        navigate(RoutePath.HOME);
      })
      .catch((err) => {
        setError(err.response.data.messages);
      });
  };

  const registerUser = async (user: IUserDTO) => {
    await userSignUp(user)
      .then(async (res) => {
        if (res && res.status === STATUS_CODE_CREATED) {
          await setUserContext();
        } else {
          setError(['Please try again later!']);
        }
      })
      .catch((err: AxiosError<IAppError>) => {
        if (err.response) {
          setError(err.response.data.messages);
        } else {
          setError(['Please try again later!']);
        }
      });
  };

  //login user
  const loginUser = async (user: IUserDTO) => {
    return await userLogin(user)
      .then(async () => {
        await setUserContext();
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.messages);
        } else {
          setError(['Please try again later!']);
        }
      });
  };

  return {
    registerUser,
    loginUser,
    error,
  };
}
