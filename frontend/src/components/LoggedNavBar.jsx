import * as React from 'react';
import { AppBar, Box, Button, Toolbar, IconButton, Typography, Menu, Container, Avatar, Tooltip, MenuItem, Switch, ListItemText } from '@mui/material';
import { Menu as MenuIcon, Logout as LogoutIcon, Brightness4 as Brightness4Icon } from '@mui/icons-material';
import styles from './LoggedNavBar.module.css';
import { Link } from 'react-router-dom';
import LogoWhite from '../assets/icons/LogoWhite';
import NotificationIcon from '../assets/icons/NotificationIcon';

const settings = ['settings', 'dark mode', 'notifications', 'log out'];
const navItems = ['categories', 'budgets', 'all transactions', 'goals', 'connected accounts'];

function LoggedNavbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [darkMode, setDarkMode] = React.useState(false); // состояние переключателя

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <AppBar position="static" className={styles.navbar}>
      <Container maxWidth="100%">
        <Toolbar disableGutters className={styles.navbarToolbar}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Link to="/main" style={{ textDecoration: 'none' }}>
                <Box sx={{ width: '43px', height: '37.5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <LogoWhite style={{ width: '100%', height: '100%' }} />
                </Box>
              </Link>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 2 }}>
                {navItems.map((item) => (
                  <Button key={item} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block', margin: '14px' }}>
                    {item}
                  </Button>
                ))}
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: 'block', md: 'none' } }}
                >
                  {navItems.map((item) => (
                    <MenuItem key={item} onClick={handleCloseNavMenu}>
                      <Typography sx={{ textAlign: 'center' }}>{item}</Typography>
                    </MenuItem>
                  ))}
                  {settings.map((setting) => (
                    <MenuItem
                      key={setting}
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        color: 'white',
                      }}
                    >
                      <ListItemText primary={setting} />
                      {setting === 'dark mode' && (
                        <Switch 
                        checked={darkMode} 
                        onChange={handleToggleDarkMode} 
                        />
                      )}
                      {setting === 'log out' && (
                        <LogoutIcon sx={{ ml: 1 }} />
                      )}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                <IconButton color="inherit" sx={{ width: '35.2px', height: '39px', marginTop: 'auto', marginBottom: 'auto' }}>
                  <NotificationIcon sx={{ width: '27.2px', height: '32px' }} />
                </IconButton>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{
                    mt: '45px',
                    '& .MuiMenu-paper': {
                      backgroundColor: '#2E2E2E',
                      color: 'white',
                      borderRadius: '8px',
                      padding: '8px',
                    },
                  }}
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
                >
                  {settings.map((setting) => (
                    <MenuItem
                      key={setting}
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        color: 'white',
                      }}
                    >
                      <ListItemText primary={setting} />
                      {setting === 'dark mode' && (
                        <Switch 
                        checked={darkMode} 
                        onChange={handleToggleDarkMode} 
                        />
                      )}
                      {setting === 'log out' && (
                        <LogoutIcon sx={{ ml: 1 }} />
                      )}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default LoggedNavbar;