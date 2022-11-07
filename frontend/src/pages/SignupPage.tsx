import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useEffect, useState } from 'react';
import useAuth from 'src/hooks/useAuth';

import SignInSignUpModal from '../components/SignInSignUpModal/SignInSignUpModal';
import { isEmpty } from 'lodash';
import Footer from '../components/Footer';
import Header from '../components/Header';

import { Fade } from 'react-slideshow-image';

import ss1 from '../assets/ss-1.png';
import ss2 from '../assets/ss-2.png';
import ss3 from '../assets/ss-3.png';
import ss4 from '../assets/ss-4.png';

import 'react-slideshow-image/dist/styles.css';
import './SignupPage.scss';

// todo: add video image as slide too
const fadeImages = [
  {
    url: ss1,
    alt: 'landing',
  },
  {
    url: ss2,
    alt: 'interview greet',
  },
  {
    url: ss3,
    alt: 'interview chat',
  },
  {
    url: ss4,
    alt: 'interview video',
  },
];

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
                passwordPlaceholder="At least 8 characters"
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
          <Dialog
            open={isDialogOpen}
            onClose={closeDialog}
            onKeyUp={(e) => {
              e.preventDefault();
              if (e.code === 'Enter' || e.code === 'Esc') {
                closeDialog();
              }
            }}
          >
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
          <Fade arrows={false} duration={3000} pauseOnHover={false}>
            {fadeImages.map(({ url, alt }) => (
              <img id="sample-pic" src={url} alt={alt} key={url} />
            ))}
          </Fade>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignupPage;
