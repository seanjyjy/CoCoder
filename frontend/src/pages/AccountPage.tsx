import { Button } from '@mui/material';
import { AxiosError } from 'axios';
import { isNil } from 'lodash';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { STATUS_CODE_NOT_FOUND, STATUS_CODE_OK } from 'src/constants';
import { UserContext } from 'src/hooks/UserContext';
import { RoutePath } from 'src/services/RoutingService';
import { userDelete, userLogout, viewUserPublicInfo } from 'src/services/UserService';
import { IUserInfo } from '../../../common/Models';
export default function AccountPage() {
  const { username } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [isOwner, setIsOwner] = useState(false);
  const [userInfo, setUserInfo] = useState<IUserInfo>();

  useEffect(() => {
    if (isNil(userInfo) && username) {
      viewUserPublicInfo(username)
        .then((res) => {
          if (res.status === STATUS_CODE_OK) {
            setUserInfo(res.data);
          }
        })
        .catch((err: AxiosError) => {
          if (err.response?.status === STATUS_CODE_NOT_FOUND) {
            setUserInfo({ username: "Hmm... This user doesm't exist." });
          }
        });
    }
  }, [username, userInfo]);

  useEffect(() => {
    if (user) {
      if (username && user.username === username) {
        // Owner is viewing their own page
        console.log(username + 'is owner');
        setIsOwner(true);
      } else {
        setIsOwner(false);
      }
    }
  }, [user]);

  const handleDeleteAccount = async () => {
    if (username) {
      console.log('Deleting account');
      await userDelete(username)
        .then(async (res) => {
          if (res.status == STATUS_CODE_OK) {
            await userLogout().catch((err) => console.log(err));
            navigate(RoutePath.BASE);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleLogout = async () => {
    console.log('Logging Out');
    await userLogout().catch((err) => console.log(err));
    navigate(RoutePath.LOGIN);
  };

  return (
    <div>
      {userInfo &&
        Object.keys(userInfo).map((field, index) => {
          return (
            <div key={index}>
              {field}: {userInfo[field]}
            </div>
          );
        })}
      {/* <hr />
      {console.log(isOwner)} */}
      {isOwner && (
        <Button variant="text" onClick={handleDeleteAccount}>
          Delete Account
        </Button>
      )}
      {isOwner && (
        <Button variant="text" onClick={handleLogout}>
          Logout
        </Button>
      )}
    </div>
  );
}
