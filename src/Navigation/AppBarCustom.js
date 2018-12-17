import React from 'react'
import PropTypes from 'prop-types'
import {withStyles, AppBar, Toolbar} from '@material-ui/core/'

const styles = theme => ({
    visible: {
        opacity: 1,
        transition: 'all 2s',
    },
    hidden: {
        opacity: 0,
        transition: 'all 2s',
    },
})

class AppBarCustom extends React.Component {
    state = {
        oldScroll: 0,
        newScroll: 0,
        scrolled: false,
        visible: true,
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
        const { classes, checked, children } = this.props
        const { visible } = this.state
        return (
            <AppBar 
                color={checked ? "secondary" : "primary"} 
                className={visible ? classes.visible : classes.hidden}
            >
                <Toolbar>
                    {children}
                </Toolbar>
            </AppBar>
        );
    }
}

AppBarCustom.propTypes = {
    classes: PropTypes.object.isRequired,
    checked: PropTypes.bool.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
    ]),

};

export default withStyles(styles)(AppBarCustom);
