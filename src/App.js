import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import orange from '@material-ui/core/colors/orange';
import './App.css';
import Navbar from './Navbar'
import Content from './Content'

const theme = createMuiTheme({
    palette: {
        primary: { main: teal[500], contrastText: '#000' },
        secondary: { main: orange[500], contrastText: '#FFF' },
    },
});

class App extends Component {
  render() {
    return (
      <div className="App">
          <MuiThemeProvider theme={theme}>
            <Navbar/>
            <Content/>
          </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
