import { useState } from 'react';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './index.scss';

type SignInSignUpProps = {
  usernamePlaceholder?: string;
  passwordPlaceholder?: string;
  headerText: string;
  onSubmit: () => void;
  onClose: () => void;
  open: boolean;
  submitText: string;
};

const SignInSignUpModal = ({ usernamePlaceholder, passwordPlaceholder, headerText, onClose, onSubmit, open, submitText }: SignInSignUpProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const clear = () => {
    setUsername('');
    setPassword('');
  };

  const onCancel = () => {
    onClose();
    clear();
  };

  const onPrimarySubmit = () => {
    onClose();
    clear();
    onSubmit();
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
