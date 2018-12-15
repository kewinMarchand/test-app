import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"
import {withStyles, Fab, Tooltip} from '@material-ui/core/'
import Dashboard from '@material-ui/icons/Dashboard'

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    },
})

class AdminLink extends React.Component {
    render() {
        const { classes, checked } = this.props
        return (
            <Link to="/admin/">
                <Tooltip title="admin page">
                    <Fab 
                        color={checked ? "primary" : "secondary"}
                        aria-label="Admin" 
                        size="small"
                        className={classes.fab}
                    >
                        <Dashboard 
                            color={checked ? "secondary" : "primary"}
                        />
                    </Fab>
                </Tooltip>
            </Link>
        );
    }
}

AdminLink.propTypes = {
    classes: PropTypes.object.isRequired,
    checked: PropTypes.bool.isRequired,
}

export default withStyles(styles)(AdminLink)
