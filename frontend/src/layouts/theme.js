// src/layouts/theme.js
import { createTheme } from '@mui/material/styles';
import '@fontsource/varela-round'; // Импортируем Varela Round

const theme = createTheme({
  typography: {
    fontFamily: "'Varela Round', sans-serif",
    allVariants: {
      color: 'white', // Устанавливаем цвет для всех текстовых элементов
    },
    button: {
      textTransform: 'none', // Отключаем uppercase для кнопок
    },
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        // Ползунок
        thumb: {
          color: '#E6DEF5', // Цвет по умолчанию
        },
        // База переключателя
        switchBase: {
          '&.Mui-checked': {
            '& .MuiSwitch-thumb': {
              color: '#E6DEF5', // Цвет ползунка, когда включен
            },
            '& + .MuiSwitch-track': {
              backgroundColor: '#50DA7E', // Цвет трека, когда включен
            },
          },
          '&.Mui-disabled': {
            '& .MuiSwitch-thumb': {
              color: '#E6DEF5', // Цвет ползунка в состоянии "disabled"
            },
          },
        },
        // Трек
        track: {
          backgroundColor: '#B0BEC5', // Цвет трека по умолчанию (выключено)
          opacity: 1,
        },
      },
    },
  },
  },
);

export default theme;
