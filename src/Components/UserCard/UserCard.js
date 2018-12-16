import React from 'react'
import PropTypes from 'prop-types'
import {Card, CardActions, CardContent, Grid} from '@material-ui/core/'
import {getRandomUserTheme} from '../../helpers/getRandomColor'
import UserCardHeader from './UserCardHeader'
import UserCardCollapse from './UserCardCollapse'
import UserCardActions from './UserCardActions'

class UserCard extends React.Component {
  state = {
    collapse: false,
    userTheme: null
  }

  handleCollapse = () => {
    this.setState({collapse: !this.state.collapse})
  }
  componentDidMount() {
      const userTheme = getRandomUserTheme()
      this.setState({userTheme: userTheme})
      console.log(this.props.user)
  }

  render() {
    const {collapse, userTheme} = this.state
    const {user} = this.props
    return (
      <Grid item xs={12} xl={6} md={4} >
        {user && userTheme &&
          <Card elevation={10}>
            <UserCardHeader 
              user={user} 
              userTheme={userTheme}
            />
            <CardContent>
              <UserCardCollapse 
                collapse={collapse} 
                user={user}
              />
            </CardContent>
            <CardActions>
              <UserCardActions 
                collapse={collapse} 
                handleCollapse={this.handleCollapse} 
                userTheme={userTheme}
              />
            </CardActions>
          </Card> 
        }
      </Grid> 
    );
  }
}

UserCard.propTypes = {
  user: PropTypes.object,
};

export default UserCard
