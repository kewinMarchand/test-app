import React from 'react'
import PropTypes from 'prop-types'
import ListItemLayout from '../partials/ListItemLayout'
import {ListItemText, Typography} from '@material-ui/core/'

class LawCardThemes extends React.Component {
  render() {
    const {law, title} = this.props
    return (
      <ListItemLayout title={title} divider>
        <ListItemText 
          inset
          disableTypography
          primary={
            <Typography variant="caption">
              {law.themes.map((theme, index) => (
                <span key={index}>
                  {theme}
                  {index !== law.themes.length - 1 && 
                    <span>&nbsp; &#x2F; &nbsp;</span>
                  }
                </span>
              ))}
            </Typography>
          }
        />
      </ListItemLayout>
    );
  }
}

LawCardThemes.propTypes = {
  law: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default LawCardThemes
