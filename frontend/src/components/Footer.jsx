// src/components/Footer.js
import './Footer.css'
import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material'

function Footer() {
  return (
    <footer>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Box sx={{ display: 'flex', gap: 2 }}>
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

        <Typography sx={{ textAlign: 'center' }}>
          &copy; 2024 Spendro
          <br /> All rights reserved
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
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
