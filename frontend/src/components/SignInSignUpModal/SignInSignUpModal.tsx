import { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import useAuth from 'src/hooks/useAuth';
import { isEmpty } from 'lodash';
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
  const { error } = useAuth();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState('');
  const [dialogMsg, setDialogMsg] = useState<string[]>([]);
  
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

  const closeDialog = () => setIsDialogOpen(false);

  const setErrorDialog = (msgs: string[]) => {
    setIsDialogOpen(true);
    setDialogTitle('Error');
    setDialogMsg(msgs);
  };

  useEffect(() => {
    if (!isEmpty(error)) {
      setErrorDialog(error);
    }
  }, [error]);

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

        <Dialog open={isDialogOpen} onClose={closeDialog}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          {dialogMsg.map((msg) => {
            return <DialogContentText>{msg}</DialogContentText>;
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Close</Button>
        </DialogActions>
      </Dialog>
      </div>
    </Modal>
  );
};

export default SignInSignUpModal;
