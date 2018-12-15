import React from 'react';
import PropTypes from 'prop-types';
import {withStyles, MuiThemeProvider, Grid} from '@material-ui/core/';
import {AppBar, Menu, Notification, Sidebar} from 'react-admin';
import theme from '../../../Theme'

const styles = theme => ({
    appFrame: {
        zIndex: 1,
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default,
        position: 'relative',
    },
    appbar: {
        marginBottom: theme.spacing.unit * 4,
    },
    content: {
        padding: theme.spacing.unit * 3,
        paddingLeft: 5,
    },
});

class AdminLayout extends React.Component {
    render() {
        const {children, classes, dashboard, logout, open, title} = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <Grid 
                    container 
                    direction="column" 
                    className={classes.appFrame}
                >
                    <AppBar
                        className={classes.appbar} 
                        title={title} 
                        open={open} 
                        logout={logout}
                    />
                    <Grid 
                        container 
                        component="main"
                        wrap="nowrap"
                    >
                        <Sidebar>
                            <Menu 
                                logout={logout} 
                                hasDashboard={!!dashboard} 
                            />
                        </Sidebar>
                        <Grid 
                            container
                            className={classes.content}
                        >
                            {children}
                        </Grid>
                    </Grid>
                    <Notification />
                </Grid>
            </MuiThemeProvider>
        );
    }
}

AdminLayout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    dashboard: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
    ]),
    title: PropTypes.string.isRequired,
};

export default withStyles(styles)(AdminLayout)