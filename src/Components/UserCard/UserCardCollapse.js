import React from 'react'
import PropTypes from 'prop-types'
import {Collapse, Divider, List, ListItem, ListItemText} from '@material-ui/core/'

class UserCardCollapse extends React.Component {
  render() {
    const {collapse, user} = this.props
    return (
      <Collapse in={collapse}>
        <List>
          <ListItem>
            <ListItemText
              primary={`${user.address.suite} ${user.address.street} ${user.address.city}`}
            />
            <Divider/>
          </ListItem>
          <ListItem>
            <ListItemText
              primary={user.company.name}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={user.id}
            />
          </ListItem>
        </List>
      </Collapse>
    );
  }
}

UserCardCollapse.propTypes = {
  collapse: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired, 
};

export default UserCardCollapse
