import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import bg from '../public/images/locations/bryson-background.jpg';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      //main: '#556cd6',
      main: '#000000',
    },
    secondary: {
      main: '#696664',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  /*
  overrides: {
    // Style sheet name ⚛️
    html: {
      // Name of the rule
      background: {
        // Some CSS
        backgroundImage: bg,
      },
    },
  },
  */
  backgroundImage: bg,
});

export default theme;
