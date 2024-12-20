import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, ButtonGroup } from "@mui/material";
import { BarChart, CartesianGrid, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './BalanceChart.module.css';
import '@fontsource/varela-round'; // Импортируем Varela Round
import axios from 'axios';

function BalanceChart() {
  const [data, setData] = useState([]);
  const [dateRange, setDateRange] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5001/api/mono/monthlybalance')
      .then(response => {
        console.log(response.data); // Логируем данные для проверки
        if (!response.data.monthlybalance || !Array.isArray(response.data.monthlybalance)) {
          throw new Error('Invalid data structure');
        }

        // Форматируем данные и оставляем только первую транзакцию для каждой уникальной даты
        const filteredData = response.data.monthlybalance.reduce((acc, payment) => {
          const date = new Date(payment.date * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
          if (!acc[date]) {
            acc[date] = { date, balance: payment.balance }; // Добавляем только первую транзакцию
          }
          return acc;
        }, {});

        // Конвертируем объект обратно в массив и переворачиваем порядок
        const formattedData = Object.values(filteredData).reverse();
        setData(formattedData);

        // Определяем диапазон дат
        if (formattedData.length > 0) {
          const firstDate = formattedData[0].date; // Первая транзакция
          const currentDate = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }); // Текущая дата
          setDateRange(`${firstDate} - ${currentDate}`);
        }
      })
      .catch(error => {
        console.error('Error fetching monthly balance:', error);
        setData([]); // Устанавливаем пустой массив данных
      });
  }, []);

  const CustomizedLabel = props => (
    <text fontFamily={'Varela Round'} fontSize={8} textAnchor="middle"></text>
  );

  return (
    <Box
      sx={{
        backgroundColor: "#1E1E1E",
        borderRadius: "20px",
        padding: "24px",
        color: "white",
        width: "803px",
        height: "324px",
        maxWidth: "800px",
        margin: "0 auto",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#F0EBFA", textTransform: "capitalize", fontFamily: 'Varela Round' }}
          >
            total balance
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#9C9C9C", marginTop: "4px", fontFamily: 'Varela Round' }}
          >
            {dateRange || 'Loading...'}
          </Typography>
        </Box>
        {/* Toggle Buttons */}
        <ButtonGroup
          variant="text"
          sx={{
            "& .MuiButton-root": {
              color: "#A3A3A3",
              textTransform: "none",
              fontSize: "14px",
              fontFamily: 'Varela Round',
            },
            "& .MuiButton-root.Mui-selected": {
              color: "white",
              fontWeight: "bold",
            },
          }}
        >
          <Button selected>week</Button>
          <Button>month</Button>
          <Button>year</Button>
        </ButtonGroup>
      </Box>
      <Box className={styles.chartContainer}>
        {data.length === 0 ? (
          <Typography variant="body2" sx={{ color: "#9C9C9C", fontFamily: 'Varela Round' }}>
            No data available for the selected period.
          </Typography>
        ) : (
          <ResponsiveContainer width="100%" height={225}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="5 5" vertical="" />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 12, fontFamily: 'Varela Round, sans-serif', fill: '#F0EBFA' }}
                interval={0} // Показываем все метки
              />
              <YAxis label={CustomizedLabel} />
              <Tooltip contentStyle={{ fontFamily: 'Varela Round, sans-serif' }} />
              <Bar dataKey="balance" fill="#8A63D2" barSize={8} radius={10} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </Box>
    </Box>
  );
}

export default BalanceChart;





