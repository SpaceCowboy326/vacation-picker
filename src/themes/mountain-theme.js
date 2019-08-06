import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const mountainTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#805f41',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#4caf50',
    },
  },
});

export default mountainTheme;
