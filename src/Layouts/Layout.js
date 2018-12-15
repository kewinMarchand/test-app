import React from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from '../Theme'

class Layout extends React.Component {
  render() {
    return (
        <MuiThemeProvider theme={theme}>
          {this.props.children}
        </MuiThemeProvider>
    );
  }
}

export default Layout;
