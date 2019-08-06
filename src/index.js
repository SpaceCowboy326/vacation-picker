import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import App from './App';
import basic_theme from './theme';




function Main(){
  const [theme, setTheme] = useState(basic_theme);

  return (
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <App setMainTheme={setTheme} />
      </ThemeProvider>
  );
}


ReactDOM.render(
  <Main />,
  document.querySelector('#root')
);