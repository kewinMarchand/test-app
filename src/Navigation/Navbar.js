import React from 'react'
import Config from '../config/Config'
import AppBarCustom from './AppBarCustom'
import NavbarTitle from './NavbarTitle'
import NavbarSwitch from './NavbarSwitch'
import NavbarMenuBtn from './NavbarMenuBtn'

class Navbar extends React.Component {
    state = {
        checked: false,
    }

    handleChange = () => {
        this.setState({
            checked: !this.state.checked
        })
    }

    render() {
        const { checked } = this.state
        return (
            <AppBarCustom checked={checked}>
                <NavbarTitle
                    logo={Config.logo} 
                    title={Config.name}
                />
                <NavbarSwitch
                    checked={checked}
                    handleChange={this.handleChange}
                />
                <NavbarMenuBtn checked={checked}/>
            </AppBarCustom>
        );
    }
}

export default Navbar
