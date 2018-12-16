import React from 'react'
import PropTypes from 'prop-types'
import {Avatar, CardHeader, Typography} from '@material-ui/core/'

class UserCardHeader extends React.Component {
  render() {
    const {user, userTheme} = this.props
    return (
      <CardHeader
        avatar={
          <Avatar 
            style={{
              backgroundImage: userTheme.gradient, 
              color: '#FFF'
            }}
          >
            {user.name[0]}
          </Avatar>
        }
        disableTypography
        title={
          <Typography 
            variant="body1"
            style={{color: userTheme.primary}}
          >
            {user.name} 
          </Typography>
        }
        subheader={
          <Typography 
            variant="caption"
            style={{color: userTheme.secondary}}
          >
            dit {user.username}
          </Typography>
        }
      />
    );
  }
}

UserCardHeader.propTypes = {
  user: PropTypes.object.isRequired,
  userTheme: PropTypes.object.isRequired,
};

export default UserCardHeader
