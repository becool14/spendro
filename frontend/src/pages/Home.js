// src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import MainContent from './MainContent';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Home;
