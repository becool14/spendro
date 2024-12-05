// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styles from "./LoggedNavBar.module.css";
import { AppBar, Toolbar, IconButton, Avatar, Button, Typography, Box, Drawer, List, ListItem, ListItemText } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import MenuIcon from "@mui/icons-material/Menu";
import LogoWhite from '../assets/icons/LogoWhite';
import { Link } from 'react-router-dom';

const LoggedNavbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = () => (
    <Box
      sx={{ width: 250, backgroundColor: '#1c1c1c', height: '100%'}}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['categories', 'budgets', 'all transactions', 'goals', 'connected accounts', 'settings'].map((text) => (
          <ListItem button key={text} className={styles.drawerButton}>
            <ListItemText primary={text} sx={{ color: 'white' }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" className={styles.navbar}>
      <Toolbar className={styles.navbarToolbar}>
        {/* Top section: logo, notifications, theme icons, greeting, and avatar */}
        <Box className={styles.navbarTop}>
          <Box alignContent={'left'}>
            <IconButton color="inherit" className={styles.iconButton}>
              <NotificationsIcon />
            </IconButton>
            <IconButton color="inherit" className={styles.iconButton}>
              <Brightness4Icon />
            </IconButton>
          </Box>
          <Box className={styles.navbarCenter}>
          <Link to="/main">
            <LogoWhite />
           </Link>
          </Box>
          <Box className={styles.navbarRight}>
            <Box className={styles.navbarText}>
              <Typography variant="body1" className={styles.navbarTextPrimary}>Hello, your Name</Typography>
              <Typography variant="body2" className={styles.navbarTextSecondary}>
                example@example.com
              </Typography>
            </Box>
            <Avatar alt="Your Avatar" className={styles.avatar} />
          </Box>
        </Box>

        {/* Bottom section: navigation links */}
        <Box className={styles.navbarBottom}>
          <Box className={styles.navbarLinks}>
            <Button color="inherit" className={styles.navbarButton}>categories</Button>
            <Button color="inherit" className={styles.navbarButton}>budgets</Button>
            <Button color="inherit" className={styles.navbarButton}>all transactions</Button>
            <Button color="inherit" className={styles.navbarButton}>goals</Button>
            <Button color="inherit" className={styles.navbarButton}>connected accounts</Button>
            <Button color="inherit" className={styles.navbarButton}>settings</Button>
          </Box>
          <IconButton color="inherit" className={styles.menuButton} onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            {drawerList()}
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default LoggedNavbar;