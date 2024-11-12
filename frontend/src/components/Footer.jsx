// src/components/Footer.js
import './Footer.css'
import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material'

function Footer() {
  return (
    <footer>
      <Box
        className="footer-container" // Додали клас для застосування стилів
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          flexWrap: 'wrap', // Дозволяє елементам обтікати один одного при маленькому екрані
          padding: '20px', // Додати відступи
        }}
      >
        {/* Ліва частина футера */}
        <Box className="footer-buttons" sx={{ display: 'flex', gap: 2 }}>
          <Button>
            <Typography>about us</Typography>
          </Button>
          <Button>
            <Typography>contact us</Typography>
          </Button>
          <Button>
            <Typography>FAQ</Typography>
          </Button>
        </Box>
        <Box>
          {/* Текст в центрі */}
          <Typography sx={{ textAlign: 'center', width: '100%', marginTop: 2 }}>
            &copy; 2024 Spendro
            <br /> All rights reserved
          </Typography>
        </Box>  
        {/* Права частина футера */}
        <Box className="footer-buttons" sx={{ display: 'flex', gap: 2 }}>
          <Button>
            <Typography>TERMS OF SERVICE</Typography>
          </Button>
          <Button>
            <Typography>PRIVACY POLICY</Typography>
          </Button>
        </Box>
      </Box>
    </footer>
  )
}

export default Footer
