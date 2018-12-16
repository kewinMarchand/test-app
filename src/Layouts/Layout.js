import React from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from '../Theme'
import Navbar from '../Navigation/Navbar'
import {Grid} from '@material-ui/core/'

class Layout extends React.Component {
  render() {
    return (
        <MuiThemeProvider theme={theme}>
          <Navbar/>
          <Grid container spacing={24} style={{marginTop: 100, position: 'relative'}}>
            {this.props.children}
          </Grid>
        </MuiThemeProvider>
    );
  }
}

export default Layout;
