import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import { withStyles, AppBar, Fab, Grid, Toolbar, Typography } from '@material-ui/core/';
import Dashboard from '@material-ui/icons/Dashboard';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    visible: {
        opacity: 1,
        transition: 'all 2s',
    },
    hidden: {
        opacity: 0,
        transition: 'all 2s',
    },
    image: {
        marginRight: 10,
    },
    grow: {
        flexGrow: 1, 
    },
    fab: {
        margin: theme.spacing.unit,
    },
})

class Navbar extends React.Component {

    state = {
        oldScroll: 0,
        newScroll: 0,
        scrolled: false,
        visible: true
    }

    updateScroll() {
        let scroll = window.scrollY;

        if (this.state.newScroll !== 0) {
            this.setState({
                oldScroll: this.state.newScroll
            })
        }

        this.setState({
            newScroll: scroll
        })

        if (scroll > 500) {
            if (this.state.newScroll <= this.state.oldScroll) {
                this.setState({
                    visible: true
                })
            } else {
                this.setState({
                    visible: false
                })
            }
        }
    }

    componentDidMount() {
        this.updateScroll()
        window.addEventListener('scroll', this.updateScroll.bind(this))
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateScroll.bind(this))
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar 
                    position="fixed" 
                    color="secondary" 
                    className={this.state.visible ? 
                        classes.visible 
                        : 
                        classes.hidden
                    }
                >
                    <Toolbar>
                        <Link to="/">
                            <img
                                src="http://www.purjus.fr/wp-content/uploads/2016/07/favicon-purjus.png"
                                width="auto"
                                height="24"
                                alt="Purjus Communication"
                                className={classes.image}
                            />
                        </Link>
                        <Typography 
                            variant="h6" 
                            color="inherit" 
                        >
                            Purjus
                        </Typography>
                        <Grid 
                            container 
                            className={classes.grow}
                        />
                        <Link to="/admin/">
                            <Fab 
                                color="primary" 
                                aria-label="Admin" 
                                size="small"
                                className={classes.fab}
                            >
                                <Dashboard color="secondary"/>
                            </Fab>
                        </Link>
                        
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
