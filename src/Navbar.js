import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = {
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
            <div className={classes.root}>
                <AppBar position="fixed" color="secondary" className={this.state.visible ? classes.visible : classes.hidden}>
                    <Toolbar>
                        <img
                            src="http://www.purjus.fr/wp-content/uploads/2016/07/favicon-purjus.png"
                            width="auto"
                            height="24"
                            alt="Purjus Communication"
                            className={classes.image}
                        />
                        <Typography variant="h6" color="inherit">Purjus</Typography>
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
