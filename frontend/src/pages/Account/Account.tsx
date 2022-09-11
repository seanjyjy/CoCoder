import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tab,
  Tabs,
  TextField,
  styled,
  Snackbar,
  Alert,
} from '@mui/material';
import { AxiosError } from 'axios';
import { isNil, isEmpty } from 'lodash';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import { STATUS_CODE_NOT_FOUND, STATUS_CODE_OK } from 'src/constants';
import useForm from 'src/hooks/useForm';
import useLogout from 'src/hooks/useLogout';
import { UserContext } from 'src/hooks/UserContext';
import { editCurrentUser, userDelete, viewUserPublicInfo } from 'src/services/UserService';
import { IUserInfo } from '../../../../common/Models';
import './index.scss';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ paddingX: 2, paddingY: 4 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const StyledTextField = styled(TextField)({
  '& label': {
    color: 'white',
  },
  '& label.Mui-focused': {
    color: '#474DD9',
  },
  '& .MuiInput-root:before': {
    borderBottom: '1px solid white',
  },
  '& .MuiInput-root:hover:not(.Mui-disabled):before': {
    borderBottom: '1px solid white',
  },
});

const defaultForm = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
};

export default function Account() {
  const { username } = useParams();
  const { user } = useContext(UserContext);
  const logoutUser = useLogout();
  const [isOwner, setIsOwner] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState('');
  const [dialogMsg, setDialogMsg] = useState<string[]>([]);
  const [userInfo, setUserInfo] = useState<IUserInfo>();
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  const { values, handleChange, clearForm } = useForm<typeof defaultForm>(defaultForm);
  const [snackOpen, setSnackOpen] = useState(false);

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
      console.log(user.username);
      if (username && user.username === username) {
        // Owner is viewing their own page
        console.log(username + 'is owner');
        setIsOwner(true);
      } else {
        setIsOwner(false);
      }
    }
  }, [user, username]);

  const handleSubmit = async () => {
    if (!username) {
      setErrorDialog(['Please try again later!']);
      return;
    }

    const errors: string[] = [];
    if (!values.oldPassword) {
      errors.push('Please enter your current password!');
    }
    if (values.newPassword !== values.confirmPassword) {
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
    await editCurrentUser(username, { oldPassword: values.oldPassword, password: values.newPassword })
      .then((_res) => {
        clearForm();
        setSnackOpen(true);
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          setErrorDialog(err.response.data.messages);
        } else {
          setErrorDialog(['Please try again later!']);
        }
      });
  };

  const handleDeleteAccount = async () => {
    console.log(text);
    if (text !== `delete_${user?.username}`) {
      setIsError(true);
      return;
    }

    if (username) {
      console.log('Deleting account');
      await userDelete(username)
        .then(async (res) => {
          if (res.status === STATUS_CODE_OK) {
            logoutUser();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const closeDialog = () => setIsDialogOpen(false);

  const setErrorDialog = (msgs: string[]) => {
    setIsDialogOpen(true);
    setDialogTitle('Error');
    setDialogMsg(msgs);
  };

  const [value, setValue] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (!isOwner) {
    return <div>abc de </div>;
  }

  return (
    <>
      <div className="account">
        <div>
          <Header />
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ width: '600px' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleTabChange} aria-label="basic tabs example">
                  <Tab label="Change password" {...a11yProps(0)} sx={{ color: 'white' }} />
                  <Tab label="Delete account" {...a11yProps(1)} sx={{ color: 'white' }} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <div className="account__change_password">
                  <StyledTextField
                    id="oldPassword"
                    name="oldPassword"
                    label="Current Password"
                    type="password"
                    autoComplete="current-password"
                    value={values.oldPassword}
                    onChange={handleChange}
                    variant="standard"
                    InputLabelProps={{ shrink: true }}
                    sx={{ input: { color: 'white' } }}
                  />
                  <StyledTextField
                    id="newPassword"
                    name="newPassword"
                    label="New Password"
                    type="password"
                    value={values.newPassword}
                    onChange={handleChange}
                    variant="standard"
                    InputLabelProps={{ shrink: true }}
                    sx={{ input: { color: 'white' } }}
                  />
                  <StyledTextField
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirm New Password"
                    type="password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    variant="standard"
                    InputLabelProps={{ shrink: true }}
                    sx={{ input: { color: 'white' } }}
                  />
                  <Button variant="contained" onClick={handleSubmit}>
                    Change Password
                  </Button>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div className="account_delete">
                  <div>
                    Please type <span>{`delete_${user?.username}`}</span> to delete account
                  </div>
                  <StyledTextField
                    id="confirmDeleteAccount"
                    name="confirmDeleteAccount"
                    label="Delete account"
                    value={text}
                    onChange={(e) => {
                      setText(e.target.value);
                      setIsError(false);
                    }}
                    variant="standard"
                    InputLabelProps={{ shrink: true }}
                    sx={{ input: { color: 'white' } }}
                    helperText={isError ? `Incorrect entry. Please key in delete_${user?.username}` : ''}
                    error={isError}
                  />
                  <Button variant="contained" onClick={handleDeleteAccount}>
                    Delete Account
                  </Button>
                </div>
              </TabPanel>
            </Box>
          </Box>
        </div>
        <Footer />
      </div>
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
      <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} open={snackOpen} onClose={() => setSnackOpen(false)} autoHideDuration={4000}>
        <Alert onClose={() => setSnackOpen(false)} severity="success" sx={{ width: '100%' }}>
          Successfully changed password!
        </Alert>
      </Snackbar>
    </>
  );
}
