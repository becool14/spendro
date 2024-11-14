import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import stylesFAQ from './FAQ.module.css'
import AccordionFAQ from '../components/AccordionFAQ'


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

