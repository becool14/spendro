import { Box, Typography, ButtonGroup, Button } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "DEC 12", balance: 5000 },
  { date: "DEC 13", balance: 10000 },
  { date: "DEC 14", balance: 20000 },
  { date: "DEC 15", balance: 15000 },
  { date: "DEC 16", balance: 7000 },
  { date: "DEC 17", balance: 17000 },
  { date: "DEC 18", balance: 12000 },
];

function BalanceChart() {
  return (
    <Box
      sx={{
        backgroundColor: "#1E1E1E",
        borderRadius: "12px",
        padding: "16px",
        color: "white",
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
        total balance
      </Typography>
      <Typography variant="body2" sx={{ color: "#A3A3A3", marginBottom: "16px" }}>
        dec 12 - dec 18, 2024
      </Typography>

      <ButtonGroup
        variant="text"
        sx={{
          marginBottom: "16px",
          "& .MuiButton-root": {
            color: "#A3A3A3",
            textTransform: "none",
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

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="date" stroke="#A3A3A3" />
          <YAxis stroke="#A3A3A3" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#333",
              border: "none",
              borderRadius: "8px",
              color: "white",
            }}
          />
          <Bar dataKey="balance" fill="#A970FF" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default BalanceChart;
