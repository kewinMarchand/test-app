import React from 'react'
import {TextField} from 'react-admin'
import {withStyles} from '@material-ui/core/'

const styles = theme => ({
    hiddenOnSmallScreens: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
})

const DesktopOnlyTextField = ({ classes, ...props }) => (
    <TextField 
        headerClassName={classes.hiddenOnSmallScreens}
        cellClassName={classes.hiddenOnSmallScreens}
        {...props}
    />
)

DesktopOnlyTextField.defaultProps = {
    textAlign: 'center',
};

export default withStyles(styles)(DesktopOnlyTextField)
