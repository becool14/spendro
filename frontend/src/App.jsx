// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import theme from './layouts/theme' // Імпортуємо тему
import Home from './pages/Home'
import Login from './pages/Login'
import ContactUs from './pages/ContactUs'
import '@fontsource/varela-round'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
