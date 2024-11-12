import Navbar from '../components/Navbar'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.home_container}>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  )
}

export default Home
