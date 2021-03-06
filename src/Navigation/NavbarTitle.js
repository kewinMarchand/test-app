import React from 'react'
import PropTypes from 'prop-types'
import {compose} from 'recompose';
import {Link} from "react-router-dom"
import {withStyles, Grid, Typography} from '@material-ui/core/'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
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
        const { classes, logo, title, width} = this.props
        return (
            <Grid container className={classes.grow}>
                <Link to="/" className={classes.link}>
                    <Grid 
                        container
                        alignItems="center" 
                        wrap="nowrap"
                    >
                        <NavbarLogo logo={logo}/>
                        {isWidthUp('md', width) &&
                            <Typography 
                                noWrap
                                variant="h6" 
                                color="inherit" 
                                className={classes.title}
                            >
                                {title}
                            </Typography>
                        }
                    </Grid>
                </Link>
            </Grid>
        );
    }
}

NavbarTitle.propTypes = {
    classes: PropTypes.object.isRequired,
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default compose(
    withStyles(styles), 
    withWidth()
    )(NavbarTitle)
