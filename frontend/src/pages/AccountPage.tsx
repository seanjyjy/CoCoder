import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { AxiosError } from 'axios';
import { isNil, isEmpty } from 'lodash';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { STATUS_CODE_NOT_FOUND, STATUS_CODE_OK } from 'src/constants';
import useForm from 'src/hooks/useForm';
import useLogout from 'src/hooks/useLogout';
import { UserContext } from 'src/hooks/UserContext';
import { editCurrentUser, userDelete, viewUserPublicInfo } from 'src/services/UserService';
import { IUserInfo } from '../../../common/Models';
export default function AccountPage() {
  const { username } = useParams();
  const { user } = useContext(UserContext);
  const logoutUser = useLogout();
  const [isOwner, setIsOwner] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState('');
  const [dialogMsg, setDialogMsg] = useState<string[]>([]);
  const [userInfo, setUserInfo] = useState<IUserInfo>();
  const { values, handleChange } = useForm({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

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

  const handleSubmit = async () => {
    if (!username) {
      setErrorDialog(['Please try again later!']);
      return;
    }

    const errors: string[] = [];
    if (!values.oldPassword) {
      errors.push('Please enter your current password!');
    }
    if (values.newPassword != values.confirmPassword) {
      errors.push("New passwords don't match!");
    }
    if (isEmpty(values.newPassword)) {
      errors.push('Please enter a new password!');
    }
    if (!isEmpty(errors)) {
      setErrorDialog(errors);
      return;
    }
    console.log(values);
    await editCurrentUser(username, { oldPassword: values.oldPassword, password: values.newPassword }).catch((err) => {
      console.log(err);
      if (err.response) {
        setErrorDialog(err.response.data.messages);
      } else {
        setErrorDialog(['Please try again later!']);
      }
    });
  };

  const handleDeleteAccount = async () => {
    if (username) {
      console.log('Deleting account');
      await userDelete(username)
        .then(async (res) => {
          if (res.status == STATUS_CODE_OK) {
            logoutUser();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleLogout = async () => {
    console.log('Logging Out');
    logoutUser();
  };

  const closeDialog = () => setIsDialogOpen(false);

  const setErrorDialog = (msgs: string[]) => {
    setIsDialogOpen(true);
    setDialogTitle('Error');
    setDialogMsg(msgs);
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
        <>
          <Button variant="text" onClick={handleDeleteAccount}>
            Delete Account
          </Button>
          <Button variant="text" onClick={handleLogout}>
            Logout
          </Button>
          <TextField id="oldPassword" name="oldPassword" label="Current Password" type="password" autoComplete="current-password" onChange={handleChange} />
          <TextField id="newPassword" name="newPassword" label="New Password" type="password" onChange={handleChange} />
          <TextField id="confirmPassword" name="confirmPassword" label="Confirm New Password" type="password" onChange={handleChange} />
          <Button variant="text" onClick={handleSubmit}>
            Change Password
          </Button>
        </>
      )}

      <Dialog open={isDialogOpen} onClose={closeDialog}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          {dialogMsg.map((msg, index) => {
            return <DialogContentText key={index}>{msg}</DialogContentText>;
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
