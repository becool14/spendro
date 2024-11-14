import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AccordionFAQ() {
  return (
    <div style={{ margin: '0 auto', width: '50%', overflow: 'hidden' }}>
      <Accordion sx={{ display: 'flex', flexDirection: 'column' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: '#000000',
            color: 'black',
            // Переконуємося, що AccordionSummary не займає більше місця, ніж потрібно
            minHeight: '56px',
            '& .MuiAccordionSummary-content': {
              display: 'flex',
              alignItems: 'center',
            }
          }}
        >
          <Typography>What is Spendro?</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: '#000000',
            color: 'black',
            padding: '16px',  // Додано для налаштування відступів
          }}
        >
          <Typography>
            Spendro is a universal financial app for everyone!
            Using it you can control your incomes, outcomes, and achieve your most cherished financial goals as quickly as possible!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ display: 'flex', flexDirection: 'column' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
          aria-controls="panel1b-content"
          id="panel1b-header"
          sx={{
            backgroundColor: '#000000',
            color: 'black',
            minHeight: '56px',
            '& .MuiAccordionSummary-content': {
              display: 'flex',
              alignItems: 'center',
            }
          }}
        >
          <Typography>Who can use it?</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: '#000000',
            color: 'black',
            padding: '16px',
          }}
        >
          <Typography>
            Everyone, you can connect your bank throught our API banking system, or you can import your expenses manually!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ display: 'flex', flexDirection: 'column' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
          aria-controls="panel1b-content"
          id="panel1b-header"
          sx={{
            backgroundColor: '#000000',
            color: 'black',
            minHeight: '56px',
            '& .MuiAccordionSummary-content': {
              display: 'flex',
              alignItems: 'center',
            }
          }}
        >
          <Typography>Why I need to use Spendro?</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: '#000000',
            color: 'black',
            padding: '16px',
          }}
        >
          <Typography>
          Spendro is the ultimate financial app for anyone looking to take control of their finances. With Spendro, you can easily track your income and expenses, set and achieve your financial goals, and gain insights into your spending habits. The user-friendly interface and powerful features make managing your money simpler and more efficient than ever, helping you stay on top of your finances and make smarter financial decisions.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionFAQ;
