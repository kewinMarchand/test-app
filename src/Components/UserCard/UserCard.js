import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
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
    const {user} = this.props
    return (
      <UserCardLayout collapse={collapse}>
        {user && userTheme &&
          <Link to={'/users/' + user.username}> 
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
          </Link> 
        }
      </UserCardLayout> 
    );
  }
}

UserCard.propTypes = {
  user: PropTypes.object,
};

export default UserCard
