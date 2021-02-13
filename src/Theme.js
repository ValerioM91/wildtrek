import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#21cbf3',
      main: '#2196f3',
      contrastText: '#eee',
    },
    secondary: {
      light: '#FFD1A4',
      main: '#FF8E53',
      dark: '#FE6B8B',
      contrastText: '#fff',
    },
  },

  typography: {
    fontFamily: 'Nunito',
  },

  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: 'linear-gradient(45deg, #FE6B8B 0%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        minHeight: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
    },
  },
});
export default theme;
