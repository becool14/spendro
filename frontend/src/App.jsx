// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import theme from './layouts/theme'; // Імпортуємо тему
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import TermsOfService from './pages/TermsOfService';
import FAQ from './pages/FAQ';
import '@fontsource/varela-round';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Main from './pages/Main';
import ProtectedRoute from './auth/ProtectedRoute';
import BlockedForLoggedIn from './auth/BlockedForLoggedIn';
import { isTokenExpired } from './auth/authUtils';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !isTokenExpired(token)) {
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem('token'); 
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {/* All routes */}
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <BlockedForLoggedIn>
                <Login />
              </BlockedForLoggedIn>
            }
          />
          <Route
            path="/signup"
            element={
              <BlockedForLoggedIn>
                <SignUp />
              </BlockedForLoggedIn>
            }
          />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/TermsOfService" element={<TermsOfService />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />

          {/* Secured routes */}
          <Route
            path="/main"
            element={
              <ProtectedRoute>
                <Main />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
