import React from 'react'
import PropTypes from 'prop-types'
import {Divider, ListItem, ListSubheader, Typography} from '@material-ui/core/'

class ListItemLayout extends React.Component {
  render() {
    const {title, children, divider} = this.props
    return (
      <React.Fragment>
        {title && 
          <ListSubheader style={{paddingTop: 16}}>
            <Typography variant="body1">
              {title}&#x3A;&nbsp;
            </Typography>
          </ListSubheader>
        }
        <ListItem>
          {children} 
        </ListItem>
        {divider && <Divider/>}
      </React.Fragment>
    );
  }
}

ListItemLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string.isRequired,
  divider: PropTypes.bool
};

export default ListItemLayout
