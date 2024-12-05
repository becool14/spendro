// src/layouts/theme.js
import { createTheme } from '@mui/material/styles';
import '@fontsource/varela-round'; 

const theme = createTheme({
  typography: {
    fontFamily: "'Varela Round', sans-serif",
    allVariants: {
      color: 'white', 
    },
    button: {
      textTransform: 'none',  
    },
  backgroundColor: {
    primary: '#121212',  
  },
  },
});

export default theme;
