'use client';
import * as React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import '../(css)/navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { logout } from '@/utils/APIservices';
import { logoutUser } from '@/redux/features/currentUserSlice';

export default function Navbar() {
  const path = usePathname().slice(1).toLocaleUpperCase();
  const dispatch = useDispatch();
  const router = useRouter();
  const currentUser = useSelector(
    (state: RootState) => state.currentUserReducer.value
  );
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    const loggedOut = await logout();
    console.log(loggedOut);
    if (loggedOut) {
      setAnchorEl(null);
      dispatch(logoutUser());
      router.push('/');
      console.log('user has logged out');
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ backgroundColor: '#7ea3af' }}>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            {path}
          </Typography>
          {currentUser ? (
            <div>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          ) : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
