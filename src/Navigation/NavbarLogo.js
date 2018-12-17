import React from 'react'
import PropTypes from 'prop-types'
import {withStyles, IconButton, Tooltip} from '@material-ui/core/'

const styles = theme => ({
    btn: {
        marginRight: theme.spacing.unit
    },
    image: {
        padding: '0 0.71px',
    }
})

class NavbarLogo extends React.Component {
    render() {
        const { classes, logo } = this.props
        return (
            <Tooltip title="Retour à l&#39;accueil">
                <IconButton 
                    aria-label="Accueil" 
                    className={classes.btn}
                >
                    <img
                        src={logo}
                        width="auto"
                        height="24"
                        alt="Purjus Communication"
                        className={classes.image}
                    />
                </IconButton>
            </Tooltip>
        );
    }
}

NavbarLogo.propTypes = {
    classes: PropTypes.object.isRequired,
    logo: PropTypes.string.isRequired,
}

export default withStyles(styles)(NavbarLogo)
