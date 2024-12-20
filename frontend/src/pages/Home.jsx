import Navbar from '../components/Navbar'
import MainContent from '../components/MainContent'
import AboutUsComponent from '../components/AboutUsComponent'
import FaqComponent from '../components/FaqComponent'
import ContactUsComponent from '../components/ContactUsComponent'
import Footer from '../components/Footer'
import styles from './Home.module.css'
import { Box, Typography } from '@mui/material'

function Home() {
  return (
    <div className={styles.home_container}>
      <Navbar />
      <MainContent />
      <AboutUsComponent />
      <FaqComponent />
      <ContactUsComponent />
      <Footer />
    </div>
  )
}

export default Home

