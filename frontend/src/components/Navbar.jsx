import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import LogoWhite from '../assets/icons/LogoWhite';
import styles from './Navbar.module.css';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', width: '100%' }}>
          {/* Логотип */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <LogoWhite/>
          </Link>

          {/* Респонсивна навігація */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
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
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                '& .MuiPaper-root': {
                  backgroundColor: '#333', // Темний фон меню
                  color: '#fff', // Білий текст
                },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/login" style={{ textDecoration: 'none', color: 'primary' }}>
                  <Typography textAlign="center">login</Typography>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/" style={{ textDecoration: 'none', color: 'primary' }}>
                  <Typography textAlign="center">sign up</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          {/* Статичне меню для великих екранів */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button component={Link} to="/login" color="inherit">login</Button>
            <Button component={Link} to="/" color="inherit">sign up</Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
