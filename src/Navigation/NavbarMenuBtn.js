import React from 'react'
import PropTypes from 'prop-types'
import {withStyles, IconButton, Tooltip} from '@material-ui/core/'
import Dashboard from '@material-ui/icons/Dashboard'
import NavbarMenu from './NavbarMenu'

const styles = theme => ({
    btn: {
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
                <Tooltip title="menu">
                    <IconButton 
                        aria-label="Menu" 
                        className={classes.btn}
                        onClick={this.handleOpenMenu}
                    >
                        <Dashboard 
                            color={checked ? "primary" : "secondary"}
                        />
                    
                    </IconButton>
                </Tooltip>
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
