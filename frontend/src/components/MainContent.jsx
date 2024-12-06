import styles from './MainContent.module.css'
import { Button, Container, Typography, Box } from '@mui/material'

function MainContent() {
  return (
    <div className={styles.main_content}>
      
      
      <Typography variant="h1" sx={{ fontSize: '2.125rem' }}>
        Spendro – Empower Your Finances,
        <br /> Achieve Financial Freedom! 
      </Typography>

      <Container>
        <Button
          style={{ backgroundColor: '#E6DEF5', color: '#5820BE' }}
         // variant="contained"
        >
          Learn More
        </Button>
        <Button
          style={{ backgroundColor: '#5820BE', color: '' }}
        //  variant="contained"
        >
          Get Started
        </Button>

     
      </Container>

 <h1>Welcome to Main Content</h1>
      {[...Array(200)].map((_, index) => (
        <p key={index}>This is line {index + 1}</p>
      ))} 

      
    </div>
  )
}

export default MainContent
