import React from 'react'
import PropTypes from 'prop-types'
import {withStyles, Fab, Tooltip} from '@material-ui/core/'
import Dashboard from '@material-ui/icons/Dashboard'
import NavbarMenu from './NavbarMenu'

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    },
})

class NavbarMenuBtn extends React.Component {

    state = {
        anchorEl: null,
    }

    handleOpenMenu = event => {
        this.setState({anchorEl: event.currentTarget})
    }

    handleCloseMenu = event => {
        this.setState({anchorEl: null})
    }

    render() {
        const { anchorEl } = this.state
        const { classes, checked } = this.props
        return (
            <React.Fragment>
                <Fab 
                    color={checked ? "primary" : "secondary"}
                    aria-label="Admin" 
                    size="small"
                    className={classes.fab}
                    onClick={this.handleOpenMenu}
                >
                    <Tooltip title="menu">
                        <Dashboard 
                            color={checked ? "secondary" : "primary"}
                        />
                    </Tooltip>
                </Fab>
                <NavbarMenu 
                    anchorEl={anchorEl}
                    handleCloseMenu={this.handleCloseMenu}
                />
            </React.Fragment>
        );
    }
}

NavbarMenuBtn.propTypes = {
    classes: PropTypes.object.isRequired,
    checked: PropTypes.bool.isRequired,
}

export default withStyles(styles)(NavbarMenuBtn)
