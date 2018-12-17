import React from 'react'
import PropTypes from 'prop-types'
import {CardActions, Grid, IconButton} from '@material-ui/core/'
import Add from '@material-ui/icons/Add'
import Clear from '@material-ui/icons/Clear'

class UserCardActions extends React.Component {
  render() {
    const {handleCollapse, collapse, userTheme} = this.props
    return (
      <CardActions>
        <Grid container justify="flex-end">
          <IconButton onClick={handleCollapse}>
            {collapse ? 
              <Clear style={{color: userTheme.primary}}/> 
              : 
              <Add style={{color: userTheme.secondary}}/>
            }
          </IconButton>
        </Grid>
      </CardActions>
    );
  }
}

UserCardActions.propTypes = {
  collapse: PropTypes.bool.isRequired,
  userTheme: PropTypes.object.isRequired,
  handleCollapse: PropTypes.func.isRequired,
};

export default UserCardActions
