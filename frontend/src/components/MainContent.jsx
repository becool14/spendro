import './MainContent.css'
import { Button, Container, Typography } from '@mui/material'

function MainContent() {
  return (
    <div className="main-content">
      <Typography variant="h1" sx={{ fontSize: '2.125rem' }}>
        Spendro – Empower Your Finances,
        <br /> Achieve Financial Freedom!
      </Typography>
      <Container>
        <Button
          style={{ backgroundColor: '#E6DEF5', color: '#5820BE' }}
          variant="contained"
        >
          Learn More
        </Button>
        <Button
          style={{ backgroundColor: '#5820BE', color: '' }}
          variant="contained"
        >
          Get Started
        </Button>
      </Container>
    </div>
  )
}

export default MainContent
