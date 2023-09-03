import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  typography: {
    fontFamily: 'JetBrainsMono',
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#8ab4f8',
    },
    secondary: {
      main: '#8ab4f8',
    },
    background: {
      paper: '#202124',
      default: '#202124',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none' },
      },
    },
  },
});

export default defaultTheme;
