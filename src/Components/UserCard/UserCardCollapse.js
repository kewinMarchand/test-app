import React from 'react'
import PropTypes from 'prop-types'
import {CardContent, Collapse, Divider, List, ListItem, ListItemText} from '@material-ui/core/'

class UserCardCollapse extends React.Component {
  render() {
    const {collapse, user} = this.props
    return (
      <CardContent>
        <Collapse in={collapse}>
          <List>
            <ListItem>
              <ListItemText
                primary={`${user.address.suite} ${user.address.street}`}
              />
              <Divider/>
            </ListItem>
            <ListItem>
              <ListItemText
                primary={`${user.address.zipcode} ${user.address.city}`}
              />
              <Divider/>
            </ListItem>
            <ListItem>
              <ListItemText
                primary={user.phone}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={user.email}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={user.website}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={user.company.name}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={user.company.bs}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={user.company.catchPhrase}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={user.id}
              />
            </ListItem>
          </List>
        </Collapse>
      </CardContent>
    );
  }
}

UserCardCollapse.propTypes = {
  collapse: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired, 
};

export default UserCardCollapse
