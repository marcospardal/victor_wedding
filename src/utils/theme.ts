import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#FAF3E9',
      paper: '#D4C6AC'
    },
    primary: {
      main: '#53583E'
    },
    secondary: {
      main: '#FFD700'
    },
    text: {
      primary: '#FFF',
      secondary: '#FAF3E9'
    }
  },
});

export default theme;