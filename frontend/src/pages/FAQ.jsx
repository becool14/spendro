import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import stylesFAQ from './FAQ.module.css'
import AccordionFAQ from '../components/AccordionFAQ'
import { Button, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react';


function FAQ() {
  
  return (
    <div>
      <Navbar />
      <div className={stylesFAQ.main_content}>
        <AccordionFAQ />
      </div>
      <Footer />
    </div>
  )
}

export default FAQ;

