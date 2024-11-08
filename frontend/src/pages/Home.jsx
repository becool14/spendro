import Navbar from '../components/Navbar'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'
import './Home.css'

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  )
}

export default Home
