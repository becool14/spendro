// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import theme from './layouts/theme' // Імпортуємо тему
import Home from './pages/Home'
import Login from './pages/Login'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import TermsOfService from './pages/TermsOfService'
import FAQ from './pages/FAQ'
import '@fontsource/varela-round'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/TermsOfService" element={<TermsOfService />} />
          <Route path="/FAQ" element={<FAQ/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
