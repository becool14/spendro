import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Typography from '@mui/material/Typography';
import { List, ListItem, Container, Button } from '@mui/material';

import './AboutUs.css';

function AboutUs() {
  return (
    <div className="container">
      <Navbar />
      <div className="about-content">
        <Typography variant="h2" sx={{ fontSize: '2.5rem', color: '#E6DEF5', marginBottom: '20px' }}>
          About us
        </Typography>
        <Container sx={{ textAlign: 'center', marginBottom: '40px' }}>
          <Typography variant="body1" className="text-section">
          Spendro was created with the aim of simplifying the management of daily expenses and household budgets in a simple and intuitive way. Our mission is to support people in adopting a conscious approach to personal finance, so that everyone can achieve their financial goals and better plan for the future.
          </Typography>
        </Container>

        <Typography variant="h3" sx={{ fontSize: '2rem', color: '#E6DEF5', marginBottom: '20px' }}>
          Our mission
        </Typography>
        <Container sx={{ textAlign: 'center', marginBottom: '40px' }}>
          <Typography variant="body1" className="text-section">
          We believe that good personal finance management starts with having a clear picture of where our money is going. Spendro enables quick and convenient tracking of expenses and helps users understand their financial habits. We aim for our app to be more than just a tool – we want it to be a support on the path to improving financial well-being and achieving long-term goals.
          </Typography>
        </Container>

        <Typography variant="h3" sx={{ fontSize: '2rem', color: '#E6DEF5', marginBottom: '20px' }}>
          Our team
        </Typography>
        <Container sx={{ textAlign: 'center', marginBottom: '40px' }}>
          <Typography variant="body1" className="text-section">
          We are a group of enthusiasts of finance, technology, and modern solutions, united by the common goal of developing tools that assist in conscious budget management. Every day, we work to ensure that Spendro meets the needs of our users and helps them lead a more balanced financial life.
          </Typography>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
