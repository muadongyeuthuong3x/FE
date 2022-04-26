import {
  Logout,
  PersonOutlineOutlined,
  SearchOutlined,
  ShoppingBagOutlined,
} from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { RootState } from 'app/store';
import Logo from 'assets/image/logo.png';
import MenuHeader from 'components/MenuHeader/MenuHeader';
import { authActions, AuthEnumsPath } from 'features/auth/auth';
import { CartEnumPath } from 'features/cart/cart';
import React, { FC, MouseEvent, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { HeaderNav, HeaderPathEnum } from './constants/Header.path';

export const Header: FC = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const userInfor = useAppSelector((state: RootState) => state.auth.currentUser);
  const history = useHistory();
  const dispatch = useAppDispatch();
  const open = Boolean(anchorEl);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickAvatar = (event: MouseEvent<HTMLElement>) => {
    if (!userInfor) {
      history.push(AuthEnumsPath.LOGIN);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleLogout = () => {
    dispatch(authActions.logout());
    history.push(AuthEnumsPath.LOGIN);
  };

  return (
    <>
      <AppBar
        sx={{
          padding: '15px 0',
          boxShadow: scroll
            ? '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)'
            : 'none',
        }}
      >
        <Container
          maxWidth="xl"
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Box sx={{ '& img': { verticalAlign: 'middle' } }}>
            <Link to={HeaderPathEnum.HOME}>
              <img src={Logo} alt="logo" width={150} />
            </Link>
          </Box>
          <Box>
            <MenuHeader menuOptions={HeaderNav} />
          </Box>
          <Box>
            <IconButton>
              <SearchOutlined
                sx={(theme) => ({
                  color: theme.palette.primary.contrastText,
                })}
              />
            </IconButton>
            <IconButton onClick={handleClickAvatar}>
              <PersonOutlineOutlined
                sx={(theme) => ({
                  color: theme.palette.primary.contrastText,
                })}
              />
            </IconButton>
            <IconButton onClick={() => history.push(CartEnumPath.CART)}>
              <ShoppingBagOutlined
                sx={(theme) => ({
                  color: theme.palette.primary.contrastText,
                })}
              />
            </IconButton>
          </Box>
        </Container>
      </AppBar>

      {userInfor && (
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={() => history.push(AuthEnumsPath.CHANGE_INFORMATION)}>
            <Avatar /> Profile
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      )}
    </>
  );
};
