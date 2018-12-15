import React from 'react'
import PropTypes from 'prop-types'
import {Switch, Tooltip} from '@material-ui/core/'

class NavbarSwitch extends React.Component {
    render() {
        const { checked, handleChange } = this.props
        return (
            <Tooltip title="change color">
                <Switch
                    checked={checked}
                    onChange={handleChange}
                    value="checked"
                    color="primary"
                />
            </Tooltip>
        );
    }
}

NavbarSwitch.propTypes = {
    checked: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
}

export default NavbarSwitch
