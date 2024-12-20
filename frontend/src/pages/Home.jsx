import Navbar from '../components/Navbar'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'
import styles from './Home.module.css'
import { Box } from '@mui/material'

function Home() {
  return (
    <div className={styles.home_container}>
      <Navbar />
      <MainContent />
      <Box>

      </Box>
      <Footer />
    </div>
  )
}

export default Home

