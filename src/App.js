import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from './Theme'
import Home from './Layouts/Home'
import AdminPage from './admin/src/AdminPage'

class App extends React.Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <Route exact path="/" component={Home} />
          <Route path="/admin/" component={AdminPage} />
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
