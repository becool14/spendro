import * as React from 'react';
import { Box, Typography, Button, ButtonGroup } from "@mui/material";
import { BarChart, CartesianGrid ,Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './BalanceChart.module.css';
import '@fontsource/varela-round'; // Импортируем Varela Round

function BalanceChart() {
  const data = [
    { date: 'DEC 12', balance: 6778 },
    { date: 'DEC 13', balance: 5700 },
    { date: 'DEC 14', balance: 6123 },
    { date: 'DEC 15', balance: 4956 },
    { date: 'DEC 16', balance: 7123 },
    { date: 'DEC 17', balance: 5777 },
    { date: 'DEC 18', balance: 3241 },
  ];

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
            sx={{ fontWeight: "bold",color:"#F0EBFA",  textTransform: "capitalize", fontFamily: 'Varela Round' }}
          >
            total balance
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#9C9C9C", marginTop: "4px", fontFamily: 'Varela Round' }}
          >
            dec 12 - dec 18, 2024
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
              fontFamily: 'Varela Round', // Ensure the font applies here as well
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
        <ResponsiveContainer width="100%" height={225}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="5 5" vertical=""  />
            <XAxis dataKey="date" tick={{ fontSize: 12, fontFamily: 'Varela Round, sans-serif', fill: '#F0EBFA' }} />
            <YAxis tick={{ fontSize: 12, fontFamily: 'Varela Round, sans-serif', fill: '#F0EBFA' }} />
            <Tooltip contentStyle={{ fontFamily: 'Varela Round, sans-serif' }} />
            <Bar dataKey="balance" fill="#8A63D2" barSize={8} radius={10}/>
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}

export default BalanceChart;
