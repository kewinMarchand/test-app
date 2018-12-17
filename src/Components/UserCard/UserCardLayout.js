import React from 'react'
import PropTypes from 'prop-types'
import {withStyles, Card, Grid} from '@material-ui/core/'

const styles = theme => ({
  container: {
    marginBottom: theme.spacing.unit * 4, 
    minHeight: 180, 
    padding: 0, 
    position: 'relative',
  },
  card: {
    left: '5%', 
    position: 'absolute', 
    top: 12, 
    width: '90%', 
  }
})

class UserCardLayout extends React.Component {
  render() {
    const {classes, collapse, children} = this.props
    return (
        <Grid 
          item 
          className={classes.container}
          xs={12} 
          sm={6}
          md={4} 
          xl={3} 
        >
          <Card 
            elevation={10} 
            className={classes.card}
            style={{ 
              zIndex: collapse ? 2 : 1
            }}
          >
            {children}
          </Card> 
        </Grid> 
    );
  }
}

UserCardLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  collapse: PropTypes.bool.isRequired,
  children: PropTypes.object,
};

export default withStyles(styles)(UserCardLayout)
