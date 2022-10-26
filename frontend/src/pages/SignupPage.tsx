import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useEffect, useState } from 'react';
import useAuth from 'src/hooks/useAuth';

import SignInSignUpModal from '../components/SignInSignUpModal/SignInSignUpModal';
import samplePic from '../assets/samplePic.png';
import { isEmpty } from 'lodash';
import Footer from '../components/Footer';
import Header from '../components/Header';

import './SignupPage.scss';

function SignupPage() {
  const { registerUser, loginUser, error } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState('');
  const [dialogMsg, setDialogMsg] = useState<string[]>([]);

  const handleOpenSignIn = () => {
    setOpenSignIn(true);
  };

  const handleCloseSignIn = () => {
    setOpenSignIn(false);
  };

  const handleOpenSignUp = () => {
    setOpenSignUp(true);
  };

  const handleCloseSignUp = () => {
    setOpenSignUp(false);
  };

  const handleSignUp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await registerUser({ username, password });
  };

  const handleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await loginUser({ username, password });
  };

  const setErrorDialog = (msgs: string[]) => {
    setIsDialogOpen(true);
    setDialogTitle('Error');
    setDialogMsg(msgs);
  };

  const closeDialog = () => setIsDialogOpen(false);

  useEffect(() => {
    if (!isEmpty(error)) {
      setErrorDialog(error);
    }
  }, [error]);

  return (
    <div className="signUpPage">
      <Header />
      <div className="container">
        <div className="product one">
          <Box className="left" display={'flex'} flexDirection={'column'}>
            <div className="text title">For Engineers, By Engineers.</div>
            <div className="text subtext">Online collaborative code editor for you to be confident in your interviews.</div>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-start'}>
              <Button className="btn" variant={'outlined'} onClick={handleOpenSignIn}>
                Sign In
              </Button>
              <SignInSignUpModal
                headerText="Sign In"
                onSubmit={handleSignIn}
                onClose={handleCloseSignIn}
                open={openSignIn}
                submitText="Sign In"
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
              />

              <Button className="btn" variant={'outlined'} onClick={handleOpenSignUp}>
                Sign Up
              </Button>
              <SignInSignUpModal
                usernamePlaceholder="Alphanumeric only"
                passwordPlaceholder="At least 4 characters"
                headerText="Sign Up"
                onSubmit={handleSignUp}
                onClose={handleCloseSignUp}
                open={openSignUp}
                submitText="Sign Up"
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
              />
            </Box>
          </Box>
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
        <div className="product two">
          <img id="sample-pic" src={samplePic} alt="sample-pic" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignupPage;
