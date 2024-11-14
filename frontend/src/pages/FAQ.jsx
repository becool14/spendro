import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import stylesHome from './Home.module.css'
import stylesFAQ from './FAQ.module.css'
import AccordionFAQ from '../components/AccordionFAQ'
import { Button, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react';


function FAQ() {
  
  return (
    <div className={stylesHome.home_container}>
      <Navbar />
      <div className={stylesFAQ.main_content}>
        <AccordionFAQ />
      </div>
      <Footer />
    </div>
  )
}

export default FAQ;

