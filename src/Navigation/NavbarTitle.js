import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"
import {withStyles, Grid, Tooltip, Typography} from '@material-ui/core/'
import NavbarLogo from './NavbarLogo'

const styles = theme => ({
    link: {
        color: "inherit",
        textDecoration: 'none',
    },
    title: {
        textTransform: 'capitalize',
    },
    grow: {
        flexGrow: 1,
    },
})

class NavbarTitle extends React.Component {
    render() {
        const { classes, logo, title } = this.props
        return (
            <React.Fragment>
                <Link to="/" className={classes.link}>
                    <Tooltip title="Home page">
                        <Grid 
                            container
                            alignItems="center" 
                            wrap="nowrap"
                        >
                            <NavbarLogo logo={logo}/>
                            <Typography 
                                noWrap
                                variant="h6" 
                                color="inherit" 
                                className={classes.title}
                            >
                                {title}
                            </Typography>
                        </Grid>
                    </Tooltip>
                </Link>
            </React.Fragment>
        );
    }
}

NavbarTitle.propTypes = {
    classes: PropTypes.object.isRequired,
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default withStyles(styles)(NavbarTitle)
