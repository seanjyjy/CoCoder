import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import { useContext, useState } from 'react';
import Logo from '../assets/MainLogo.svg';
import { userLogout } from 'src/services/UserService';
import { useNavigate } from 'react-router-dom';
import { UserContext } from 'src/hooks/UserContext';
import { RoutePath } from 'src/services/RoutingService';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

const Header = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const logoutUser = async () => {
    try {
      await userLogout().then((_res) => {
        if (setUser != null) {
          setUser(null);
        }
        navigate(RoutePath.BASE);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    await logoutUser();
  };

  const settings: { name: string; onClick: () => void | Promise<void> }[] = [
    {
      name: 'Account',
      onClick: () => {
        navigate(`/${user?.username}`);
        handleCloseUserMenu(); // somehow if i am in account page and press this again it will not close
      },
    },
    {
      name: 'Home',
      onClick: () => {
        navigate('/home');
        handleCloseUserMenu();
      },
    },
    {
      name: 'Logout',
      onClick: handleLogout,
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%',
        padding: '20px 10vw 0px',
        height: '100px',
        position: 'sticky',
        top: 0,
        background: '#121826',
        zIndex: 9999,
      }}
    >
      <img
        src={Logo}
        alt="Logo"
        style={{ height: '40px', marginBottom: '30px', marginTop: '20px', cursor: user ? 'pointer' : 'default' }}
        onClick={() => {
          if (!user) return;
          navigate(RoutePath.HOME);
        }}
      />
      {user && (
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt={user?.username} src="/static/images/avatar/2.jpg" sx={{ bgcolor: '#474DD9' }} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            disableScrollLock={true}
          >
            {settings.map(({ name, onClick }) => (
              <MenuItem key={name} onClick={onClick}>
                <Typography textAlign="center">{name}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      )}
    </div>
  );
};

export default Header;
