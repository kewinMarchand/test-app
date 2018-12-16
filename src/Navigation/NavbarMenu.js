import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"
import {withStyles, Fade, Menu, MenuItem} from '@material-ui/core/'

const styles = theme => ({
    link: {
        textDecoration: 'none',
    }
})

class NavbarMenu extends React.Component {
    render() {
        const { classes, anchorEl, handleCloseMenu } = this.props
        return (
            <Menu 
                anchorEl={anchorEl} 
                open={Boolean(anchorEl)} 
                onClose={handleCloseMenu}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleCloseMenu}>
                    <Link to="/" className={classes.link}>
                        Accueil
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseMenu}>
                    <Link to="/users" className={classes.link}>
                        Users
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseMenu}>
                    <Link to="/admin" className={classes.link}>
                        Admin
                    </Link>
                </MenuItem>
            </Menu>
        );
    }
}

NavbarMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    anchorEl: PropTypes.object.isRequired,
    handleCloseMenu: PropTypes.func.isRequired,
}

export default withStyles(styles)(NavbarMenu)
