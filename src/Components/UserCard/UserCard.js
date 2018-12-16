import React from 'react'
import PropTypes from 'prop-types'
import {withStyles, Card, Grid} from '@material-ui/core/'
import {getRandomUserTheme} from '../../helpers/getRandomColor'
import UserCardHeader from './UserCardHeader'
import UserCardCollapse from './UserCardCollapse'
import UserCardActions from './UserCardActions'

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
    const {classes, user} = this.props
    return (
        <Grid 
          item 
          className={classes.container}
          xs={12} 
          md={4} 
          xl={3} 
        >
          {user && userTheme &&
            <Card 
              elevation={10} 
              className={classes.card}
              style={{zIndex: collapse ? 2 : 1}}
            >
              <UserCardHeader 
                user={user} 
                userTheme={userTheme}
              />
              <UserCardCollapse 
                collapse={collapse} 
                user={user}
              />
              <UserCardActions 
                collapse={collapse} 
                handleCollapse={this.handleCollapse} 
                userTheme={userTheme}
              />
            </Card> 
          }
        </Grid> 
    );
  }
}

UserCard.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object,
};

export default withStyles(styles)(UserCard)
