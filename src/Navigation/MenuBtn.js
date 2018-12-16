import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"
import {withStyles, Fab, Fade, Menu, MenuItem, Tooltip} from '@material-ui/core/'
import Dashboard from '@material-ui/icons/Dashboard'

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    },
})

class MenuBtn extends React.Component {

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
                <Menu 
                    anchorEl={anchorEl} 
                    open={Boolean(anchorEl)} 
                    onClose={this.handleCloseMenu}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={this.handleCloseMenu}>
                        <Link to="/admin" className={classes.link}>
                            Admin
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleCloseMenu}>
                        <Link to="/users" className={classes.link}>
                            Users
                        </Link>
                    </MenuItem>
                </Menu>
            </React.Fragment>
        );
    }
}

MenuBtn.propTypes = {
    classes: PropTypes.object.isRequired,
    checked: PropTypes.bool.isRequired,
}

export default withStyles(styles)(MenuBtn)
