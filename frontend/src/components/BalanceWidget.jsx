
import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';

const BalanceWidget = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    // Получение данных с backend
    axios.get('http://localhost:5001/balance')
      .then(response => {
        setBalance(response.data.balance / 100);
      })
      .catch(error => {
        console.error("Ошибка при получении баланса:", error);
      });
  }, []);

  return (
    <Box
      sx={{
        width: 255,
        height: 159,
        backgroundColor: '#1E1E1E',
        color: 'white',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        mt: '6px'
      }}
    >
      <Typography variant="subtitle1" sx={{ opacity: 0.7 }}>
        total balance
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        ₴{balance.toLocaleString()}
      </Typography>
    </Box>
  );
};

export default BalanceWidget;
