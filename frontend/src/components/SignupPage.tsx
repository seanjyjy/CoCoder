import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import useAuth from 'src/hooks/useAuth';
import './SignupPage.scss';
import SignInSignUpModal from '../components/SignInSignUpModal/SignInSignUpModal'
import '../assets/MainLogo.png';

function SignupPage() {
  const { registerUser, loginUser } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  
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

  const handleSignUp = async (e) => {
    e.preventDefault();
    await registerUser({ username, password });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    await loginUser({ username, password });
  };

  return (
    <div>      
      <img id="logo" src={ require("../assets/MainLogo.png") } />
      
      <div className="container">
        <div className="product">
        <Box className="left" display={'flex'} flexDirection={'column'}>
          <Typography className="text title">
            For Engineers, By Engineers
          </Typography>
          <Typography className="text subtext">
            Online collaborative code editor for you to be confident in your interviews
          </Typography>
          
          <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-start'}>
            <Button className="btn" variant={'outlined'} onClick={handleOpenSignIn}>
              Sign In
            </Button>
            <SignInSignUpModal 
              usernamePlaceholder="Username" 
              passwordPlaceholder="Password" 
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
              usernamePlaceholder="Username" 
              passwordPlaceholder="Password" 
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
        </div>
        <div className="product">
        <Box className="right" display={'flex'} justifyContent={'flex-end'}>
        <img id="sample-pic" src={ require("../assets/SamplePic.png") } />
        </Box>
        </div>
        
      </div>
 
     
    </div>
  );
}

export default SignupPage;
