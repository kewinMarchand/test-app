import React from 'react'
import PropTypes from 'prop-types'
import ListItemLayout from '../partials/ListItemLayout'
import {Grid, Hidden, List, ListItem, ListItemText, ListSubheader, Typography} from '@material-ui/core/'
import Check from '@material-ui/icons/CheckCircle'

class LawCardSteps extends React.Component {

  getStepDate = step => {
    let options = {
      weekday: "long", 
      day: "numeric", 
      month: "short", 
      year: "numeric", 
      hour: "numeric", 
      minute:"numeric"
    }
    let stepDate = new Date(step.date).toLocaleString("fr-FR", options)
    return stepDate
  }

  render() {
    const {law, title} = this.props
    return (
      <ListItemLayout title={title}>
        <List style={{width: '100%'}}>
          {law.steps.map((step, index) => (
            <ListItem key={index} disableGutters>
              <ListItemText 
                inset
                disableTypography
                primary={
                  <Typography variant="caption">
                    {step.institution}
                    <span>&#x3A;&nbsp;</span>
                    {step.step}
                  </Typography>
                }
                secondary={
                  <Grid 
                    container 
                    alignItems="center" 
                    justify="flex-end" 
                    style={{flexGrow: 1}}
                  >
                    <Hidden xsDown>
                      {undefined !== step.step &&
                        <Typography 
                          variant="caption" 
                          style={{marginRight: 12}}
                        >
                          {this.getStepDate(step)}
                        </Typography>
                      }
                    </Hidden>
                    <Check 
                      color={undefined !== step.step ? 
                        "primary" : "disabled"
                      }
                    /> 
                  </Grid>
                  
                }
                style={{
                  alignItems: 'center',
                  display: 'flex', 
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              />
            </ListItem>
          ))}
        </List>
      </ListItemLayout>
    );
  }
}

LawCardSteps.propTypes = {
  law: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default LawCardSteps
