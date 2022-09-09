import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './index.scss';

const SignInSignUpModal = ({ 
  usernamePlaceholder, 
  passwordPlaceholder, 
  headerText, 
  onClose, 
  onSubmit, 
  open, 
  submitText,
  username,
  setUsername,
  password,
  setPassword,
}) => { 
  
  const clear = () => {
    setUsername('');
    setPassword('');
  };

  const onCancel = () => {
    onClose();
    clear();
  };

  const onPrimarySubmit = (e) => {
    onClose();
    clear();
    onSubmit(e);
  };

  return (
    <Modal open={open} disableAutoFocus={true}>
      <div className="signInSignUpModal">
        <div className="signInSignUpModal__headerText">{headerText}</div>
        <div className="signInSignUpModal__textfields">
          <TextField
            label="Username"
            placeholder={usernamePlaceholder}
            variant="standard"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Password"
            placeholder={passwordPlaceholder}
            variant="standard"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
        </div>
        <div className="signInSignUpModal__buttonGroup">
          <Button variant="outlined" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="contained" onClick={onPrimarySubmit}>
            {submitText}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SignInSignUpModal;
