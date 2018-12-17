import React from 'react'
import PropTypes from 'prop-types'
import {CardContent, Collapse, Divider, List, ListItem, ListItemText, ListSubheader} from '@material-ui/core/'

class UserCardContent extends React.Component {
  render() {
    const {collapse, user} = this.props
    return (
      <Collapse in={collapse}> 
        <CardContent>
          <List dense disablePadding>
            <Divider/>
            <ListSubheader disableGutters>
              Adresse :
            </ListSubheader>
            <ListItem disableGutters>
              <ListItemText
                primary={`${user.address.suite} ${user.address.street}`}
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                primary={`${user.address.zipcode} ${user.address.city}`}
              />
              <Divider/>
            </ListItem>
            <Divider/>
            <ListSubheader disableGutters>
              Téléphone :
            </ListSubheader>
            <ListItem disableGutters>
              <ListItemText
                primary={user.phone}
              />
            </ListItem>
            <Divider/>
            <ListSubheader disableGutters>
              Présence en ligne :
            </ListSubheader>
            <ListItem disableGutters>
              <ListItemText
                primary={user.email}
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                primary={user.website}
              />
            </ListItem>
            <Divider/>
            <ListSubheader disableGutters>
              Entreprise :
            </ListSubheader>
            <ListItem disableGutters>
              <ListItemText
                primary={user.company.name}
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                primary={user.company.bs}
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                primary={user.company.catchPhrase}
              />
            </ListItem>
            <Divider/>
            <ListSubheader disableGutters>
              Id :
            </ListSubheader>
            <ListItem disableGutters>
              <ListItemText
                primary={user.id}
              />
            </ListItem>
          </List>
        </CardContent>
      </Collapse>
    );
  }
}

UserCardContent.propTypes = {
  collapse: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired, 
};

export default UserCardContent
