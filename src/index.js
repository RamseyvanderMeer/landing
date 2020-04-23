import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#9A60F2',
      light: '#C4ADF4',
      dark: '#7246CE',
      contrastText: '#fff',
    },
    secondary: {
      main: '#6F39E1',
      light: '#B68BF7',
      dark: '#6F39E1',
      contrastText: '#fff',
    },
  },
  typography: {
    useNextVariants: true
  }
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.querySelector('#root')
);

