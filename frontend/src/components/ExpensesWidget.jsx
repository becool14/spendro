import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';

const ExpensesWidget = () => {
  const [expenses, setExpenses] = useState(0);  // Состояние для хранения расходов

  useEffect(() => {
    // Получение данных с backend (сумма расходов за месяц)
    axios.get('http://localhost:5001/api/mono/expenses')
      .then(response => {
        // Предполагаем, что response.data.expenses возвращает сумму в копейках
        if (response.data.expenses) {
          setExpenses(response.data.expenses);  // Преобразуем копейки в гривны
        } else {
          setExpenses(0);  // Если нет данных, устанавливаем 0
        }
      })
      .catch(error => {
        console.error("Ошибка при получении данных о расходах:", error);
        setExpenses(0);  // В случае ошибки также устанавливаем 0
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
      <Typography variant="subtitle1" sx={{ opacity: 0.7, color: '#9C9C9C' }}>
        spent this month
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#F0EBFA' }}>
        ₴{expenses !== undefined && expenses !== null ? expenses.toLocaleString() : '0'}  {/* Защищаем от undefined */}
      </Typography>
    </Box>
  );
};

export default ExpensesWidget;
