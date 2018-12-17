import React from 'react'
import PropTypes from 'prop-types'
import {getRandomUserTheme} from '../../helpers/getRandomColor'
import UserCardLayout from './UserCardLayout'
import UserCardHeader from './UserCardHeader'
import UserCardContent from './UserCardContent'
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
      // console.log(this.props.user)
  }

  render() {
    const {collapse, userTheme} = this.state
    const {classes, user} = this.props
    return (
        <UserCardLayout collapse={collapse}>
          {user && userTheme &&
            <React.Fragment>
              <UserCardHeader 
                user={user} 
                userTheme={userTheme}
              />
              <UserCardContent 
                collapse={collapse} 
                user={user}
              />
              <UserCardActions 
                collapse={collapse} 
                handleCollapse={this.handleCollapse} 
                userTheme={userTheme}
              />  
            </React.Fragment>
          }
        </UserCardLayout> 
    );
  }
}

UserCard.propTypes = {
  user: PropTypes.object,
};

export default UserCard
