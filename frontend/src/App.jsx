// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import theme from './layouts/theme' // Імпортуємо тему
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import TermsOfService from './pages/TermsOfService'
import FAQ from './pages/FAQ'
import '@fontsource/varela-round'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Main from './pages/Main'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />  
          <Route path="/signup" element={<SignUp />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/TermsOfService" element={<TermsOfService />} />
          <Route path="/FAQ" element={<FAQ/>}/>
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/Main" element={<Main />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
