import React from 'react';
import PropTypes from 'prop-types'
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from '../Theme'
import Navbar from '../Navigation/Navbar'
import {withStyles, Grid} from '@material-ui/core/'

const styles = theme => ({
  container: {
    ...theme.mixins.gutters(),
    marginTop: theme.spacing.unit * 12, 
    maxWidth: theme.breakpoints.values.lg, 
    position: 'relative'
  }
})
class Layout extends React.Component {
  render() {
    const {classes} = this.props;
    return (
        <MuiThemeProvider theme={theme}>
          <Navbar/>
          <Grid container justify="center">
            <Grid container spacing={24} className={classes.container}>
              {this.props.children}
            </Grid>
          </Grid>
        </MuiThemeProvider>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
