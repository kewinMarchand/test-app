import React from 'react'
import PropTypes from 'prop-types'
import {CardActions, Grid, IconButton} from '@material-ui/core/'
import Add from '@material-ui/icons/Add'
import Clear from '@material-ui/icons/Clear'

class LawCardActions extends React.Component {
  render() {
    const {handleCollapse, collapse} = this.props
    return (
      <CardActions>
        <Grid container justify="flex-end">
          <IconButton onClick={handleCollapse}>
            {collapse ? 
              <Clear style={{color: 'lightgrey'}}/> 
              : 
              <Add style={{color: 'lightgrey'}}/>
            }
          </IconButton>
        </Grid>
      </CardActions>
    );
  }
}

LawCardActions.propTypes = {
  collapse: PropTypes.bool.isRequired,
  handleCollapse: PropTypes.func.isRequired,
};

export default LawCardActions
