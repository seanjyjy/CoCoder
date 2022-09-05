import { Button } from '@mui/material';
import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { STATUS_CODE_NOT_FOUND, STATUS_CODE_OK } from 'src/constants';
import { UserContext } from 'src/hooks/UserContext';
import { RoutePath } from 'src/services/RoutingService';
import { userDelete, userLogout, viewUserPublicInfo } from 'src/services/UserService';
import { IUserInfo } from '../../../common/Models';
import NotFoundPage from './NotFoundPage';

export default function AccountPage() {
  const { username } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [isOwner, setIsOwner] = useState(false);
  const [userInfo, setUserInfo] = useState<IUserInfo | null>(null);

  if (!username) {
    return <NotFoundPage />;
  }

  if (user && user.username === username) {
    // Owner is viewing their own page
    setIsOwner(true);
  } else {
    viewUserPublicInfo(username).then((res) => {
      if (res.status === STATUS_CODE_NOT_FOUND) {
        setUserInfo({ username: "Hmm... This user doesm't exist." });
      } else if (res.status === STATUS_CODE_OK) {
        setUserInfo({ username: res.data.username });
      }
    });
  }

  const handleDeleteAccount = async () => {
    if (username) {
      await userLogout()
        .then((res) => {
          userDelete(username).catch((err) => console.log(err));
          navigate(RoutePath.SIGNUP);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleLogout = async () => {
    await userLogout()
      .then((res) => {
        navigate(RoutePath.LOGIN);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {userInfo &&
        Object.keys(userInfo).map((field, index) => {
          return (
            <div>
              {field}: {userInfo[field]}
            </div>
          );
        })}
      {isOwner && <Button title="Delete Account" onClick={handleDeleteAccount} />}
      {isOwner && <Button title="Logout" onClick={handleLogout} />}
    </div>
  );
}
