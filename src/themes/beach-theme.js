import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const beachTheme = createMuiTheme({
  palette: {
    primary: {
      //main: '#00e5ff',
      contrastText: '#ff21d6',
      main: '#ff21d6',
    },
    secondary: {
      //main: '#ffffff',
      main: '#ff21d6',
      contrastText: red.A200,
    },
    error: {
      main: red.A400,
    },
    background: {
      //default: red.A200,
      //default: '#18ffff',
      default: '#18ffff',
    },
  },
});

export default beachTheme;

