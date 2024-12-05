// src/layouts/theme.js
import { createTheme } from '@mui/material/styles';
import '@fontsource/varela-round'; // імпортуємо Varela Round

const theme = createTheme({
  typography: {
    fontFamily: "'Varela Round', sans-serif",
    allVariants: {
      color: 'white', // Це задасть колір для всіх варіантів тексту
    },
    button: {
      textTransform: 'none',  // Зберігаємо регістр кнопок
    },
  backgroundColor: {
    primary: '#121212',  
    // Інші стилі
  },
  },
});

export default theme;
