import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './index.scss';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)({
  '& ::placeholder': {
    fontSize: '12px',
  },
});

type SignInSignUpProps = {
  usernamePlaceholder?: string;
  passwordPlaceholder?: string;
  headerText: string;
  onSubmit: (e: React.MouseEvent<HTMLButtonElement> | any) => void;
  onClose: () => void;
  open: boolean;
  submitText: string;
  username?: string;
  setUsername?: React.Dispatch<React.SetStateAction<string>>;
  password?: string;
  setPassword?: React.Dispatch<React.SetStateAction<string>>;
};

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
}: SignInSignUpProps) => {
  const clear = () => {
    setUsername?.('');
    setPassword?.('');
  };

  const onCancel = () => {
    onClose();
    clear();
  };

  const onPrimarySubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    onCancel();
    onSubmit(e);
  };

  return (
    <Modal open={open} disableAutoFocus={true}>
      <form className="signInSignUpModal">
        <div className="signInSignUpModal__headerText">{headerText}</div>
        <div className="signInSignUpModal__textfields">
          <StyledTextField
            autoFocus
            label="Username"
            placeholder={usernamePlaceholder}
            variant="standard"
            fullWidth
            value={username}
            onChange={(e) => setUsername?.(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
          <StyledTextField
            label="Password"
            placeholder={passwordPlaceholder}
            variant="standard"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword?.(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
        </div>
        <div className="signInSignUpModal__buttonGroup">
          <Button variant="outlined" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" onClick={onPrimarySubmit}>
            {submitText}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default SignInSignUpModal;
