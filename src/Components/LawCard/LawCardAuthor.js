import React from 'react'
import PropTypes from 'prop-types'
import ListItemLayout from '../partials/ListItemLayout'
import {ListItemText, Typography} from '@material-ui/core/'

class LawCardAuthor extends React.Component {
  render() {
    const {law, title} = this.props
    return (
      <ListItemLayout title={title} divider>
        <ListItemText 
          inset
          disableTypography
          primary={
            <Typography variant="caption">
              {law.steps[0].auteur_depot}
            </Typography>
          }
        />
      </ListItemLayout>
    );
  }
}

LawCardAuthor.propTypes = {
  law: PropTypes.object,
  title: PropTypes.string.isRequired,
};

export default LawCardAuthor
