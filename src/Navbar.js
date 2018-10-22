import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, AppBar, Toolbar, Typography } from '@material-ui/core/';

import Avatar from './Avatar';

const styles = {
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
    }
};

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
        this.updateScroll()
        window.removeEventListener('scroll', this.updateScroll.bind(this))
    }

    render() {
        const { classes } = this.props;

        return (
            <AppBar position="fixed" color="secondary" className={this.state.visible ? classes.visible : classes.hidden}>
                <Toolbar>
                    <Avatar size="56px" />
                    <Typography variant="h6" color="inherit">Test-app</Typography>
                </Toolbar>
            </AppBar>
        );
    }

}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
