import React from 'react'
import PropTypes from 'prop-types'
import {CardHeader, Typography} from '@material-ui/core/'

class LawCardHeader extends React.Component {
  render() {
    const {law} = this.props
    return (
      <CardHeader
        disableTypography
        title={
          <Typography variant="h6">
            {law.short_title}
          </Typography>
        }
        subheader={
          <Typography variant="subtitle1">
            {law.law_name}
          </Typography>
        }
      /> 
    );
  }
}

LawCardHeader.propTypes = {
  law: PropTypes.object,
};

export default LawCardHeader
