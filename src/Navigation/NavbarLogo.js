import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/'

const styles = theme => ({
    image: {
        marginRight: 10,
    }
})

class NavbarLogo extends React.Component {
    render() {
        const { classes, logo } = this.props
        return (
            <img
                src={logo}
                width="auto"
                height="24"
                alt="Purjus Communication"
                className={classes.image}
            />
        );
    }
}

NavbarLogo.propTypes = {
    classes: PropTypes.object.isRequired,
    logo: PropTypes.string.isRequired,
}

export default withStyles(styles)(NavbarLogo)
