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
      clear: '#7246CE',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ffab40',
      light: '#B68BF7',
      dark: '#6F39E1',
      contrastText: '#fff',
    },
    contrast: {
      main: '#ffab40',
      light: '#B68BF7',
      dark: '#6F39E1',
      contrastText: '#fff',
    },
    text:{
      main: '#fff',
    },
    header1:{
      main: '#C4ADF4',
    },
    header2:{
      main: '#7246CE',
    },
  },
  typography: {
    fontFamily: [
      'lato'
    ].join(','),
  },
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)

