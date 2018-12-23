import React from 'react'
import PropTypes from 'prop-types'
import LawCardHeader from './LawCardHeader'
import LawCardAuthor from './LawCardAuthor'
import LawCardThemes from './LawCardThemes'
import LawCardSteps from './LawCardSteps'
import LawCardActions from './LawCardActions'
import {Card, CardContent, CardHeader, Collapse, Grid, Hidden, List, ListItem, ListItemText, ListSubheader, Typography} from '@material-ui/core/'

class LawCard extends React.Component {
  state = {
    collapse: false,
  }

  handleCollapse = () => {
    this.setState({collapse: !this.state.collapse})
  }

  render() {
    const {collapse} = this.state
    const {law} = this.props
    return (
      <Card style={{marginBottom: 16, width: '100%'}}>
        <LawCardHeader law={law}/>
        <CardContent>
          <Typography variant="body1">
            {law.long_title}
          </Typography>
          <Collapse in={collapse}>
            <List>
              <LawCardAuthor law={law} title="Auteur"/>
              <LawCardThemes law={law} title="Thème(s)"/>
              <LawCardSteps law={law} title="Etapes"/>
            </List>
            <Typography variant="caption">
              {law.long_title_descr}
            </Typography>
          </Collapse>
        </CardContent>
        <LawCardActions 
          collapse={collapse} 
          handleCollapse={this.handleCollapse} 
        /> 
      </Card>  
    );
  }
}

LawCard.propTypes = {
  law: PropTypes.object,
};

export default LawCard
