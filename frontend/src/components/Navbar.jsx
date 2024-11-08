import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import { Link } from 'react-router-dom'

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position="static" sx={{ bgcolor: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Link to="/">
            <svg
              width="50"
              height="50"
              viewBox="0 0 86 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M42.912 76.9745C62.0423 76.9745 77.5505 61.4663 77.5505 42.336C77.5505 23.2057 62.0423 7.69745 42.912 7.69745C23.7816 7.69745 8.27344 23.2057 8.27344 42.336C8.27344 61.4663 23.7816 76.9745 42.912 76.9745ZM42.912 84.672C66.2935 84.672 85.248 65.7175 85.248 42.336C85.248 18.9545 66.2935 0 42.912 0C19.5305 0 0.575989 18.9545 0.575989 42.336C0.575989 65.7175 19.5305 84.672 42.912 84.672ZM42.9118 55.8066C50.3514 55.8066 56.3824 49.7756 56.3824 42.3361C56.3824 34.8965 50.3514 28.8655 42.9118 28.8655C35.4722 28.8655 29.4413 34.8965 29.4413 42.3361C29.4413 49.7756 35.4722 55.8066 42.9118 55.8066ZM63.6693 38.1666H70.922V45.8641H63.7871C62.1075 55.8755 53.4005 63.5041 42.9118 63.5041C31.2211 63.5041 21.7438 54.0268 21.7438 42.3361C21.7438 30.6453 31.2211 21.1681 42.9118 21.1681C53.1754 21.1681 61.7329 28.4726 63.6693 38.1666Z"
                fill="white"
              />
            </svg>
          </Link>
          {/* Desktop menu - buttons list */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button>
              <Typography>sign up</Typography>
            </Button>
            <Link to="/login">
              <Button>
                <Typography>login</Typography>
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
