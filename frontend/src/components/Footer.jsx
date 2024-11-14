// src/components/Footer.js
import styles from './Footer.module.css';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto', // Додає верхній відступ автоматично для зміщення футера вниз
        width: '100%',
        backgroundColor: '#333',
        color: '#fff',
        position: 'relative',
      }}
    >
      <Box
        className={styles.footer_container}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          padding: '20px',
        }}
      >
        {/* Ліва частина футера */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button>
            <Link to="/aboutUs" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography>about us</Typography>
            </Link>
          </Button>
          <Link to="/contactus">
          <Button>
            <Typography>contact us</Typography>
          </Button>
          </Link>
          <Link to="/FAQ">
          <Button>
            <Typography>FAQ</Typography>
          </Button>
          </Link>
        </Box>
        
        {/* Текст в центрі */}
        <Box>
          <Typography sx={{ textAlign: 'center', width: '100%' }}>
            &copy; 2024 Spendro
            <br /> All rights reserved
          </Typography>
        </Box>
        
        {/* Права частина футера */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button>
            <Link to="/TermsOfService" style={{ textDecoration: 'none', color: 'inherit' }} >
              <Typography>TERMS OF SERVICE</Typography>
            </Link>
          </Button>
          <Button>
            <Typography>PRIVACY POLICY</Typography>
          </Button>
        </Box>
      </Box>
    </Box>);
}

export default Footer;
