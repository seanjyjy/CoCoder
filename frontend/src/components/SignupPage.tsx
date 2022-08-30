import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { URL_USER_SVC } from '../configs';
import { STATUS_CODE_CREATED } from '../constants';
import { Link } from 'react-router-dom';
import { IAppError, IUser } from '../../../common/Models';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState('');
  const [dialogMsg, setDialogMsg] = useState<string[]>([]);
  const [isSignupSuccess, setIsSignupSuccess] = useState(false);

  const handleSignup = async () => {
    setIsSignupSuccess(false);
    const res = await axios.post<string, AxiosResponse, IUser>(URL_USER_SVC, { username, password }).catch((err: AxiosError<IAppError>) => {
      if (err.response) {
        setErrorDialog(err.response.data.messages);
      } else {
        setErrorDialog(['Please try again later!']);
      }
    });
    if (res && res.status === STATUS_CODE_CREATED) {
      setSuccessDialog(['Account successfully created']);
      setIsSignupSuccess(true);
    }
  };

  const closeDialog = () => setIsDialogOpen(false);

  const setSuccessDialog = (msgs: string[]) => {
    setIsDialogOpen(true);
    setDialogTitle('Success');
    setDialogMsg(msgs);
  };

  const setErrorDialog = (msgs: string[]) => {
    setIsDialogOpen(true);
    setDialogTitle('Error');
    setDialogMsg(msgs);
  };

  return (
    <Box display={'flex'} flexDirection={'column'} width={'30%'}>
      <Typography variant={'h3'} marginBottom={'2rem'}>
        Sign Up
      </Typography>
      <TextField label="Username" variant="standard" value={username} onChange={(e) => setUsername(e.target.value)} sx={{ marginBottom: '1rem' }} autoFocus />
      <TextField
        label="Password"
        variant="standard"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ marginBottom: '2rem' }}
      />
      <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-end'}>
        <Button variant={'outlined'} onClick={handleSignup}>
          Sign up
        </Button>
      </Box>

      <Dialog open={isDialogOpen} onClose={closeDialog}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          {dialogMsg.map((msg) => {
            return <DialogContentText>{msg}</DialogContentText>;
          })}
        </DialogContent>
        <DialogActions>
          {isSignupSuccess ? (
            <Button component={Link} to="/login">
              Log in
            </Button>
          ) : (
            <Button onClick={closeDialog}>Done</Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default SignupPage;
