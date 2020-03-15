import React, { Component } from 'react';
import Logo from './Logo';
import Menu from './Menu';
import MenuFold from './MenuFold';

class NavigationBar extends Component {
    constructor() {
        super();
        this.state = {
            showMenuFold: false
        }
    }
    updateDimension = () => {
        let newWindowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
        this.setState({ showMenuFold: newWindowWidth < 800 })
    }
    componentDidMount = () => {
        this.updateDimension();
        window.addEventListener("resize", this.updateDimension);
    }
    componentWillUnmount = () => {
        window.removeEventListener("resize", this.updateDimension);
    }

    render() {
        return (
            <div className="navigation-bar">
                <Logo />
                {this.state.showMenuFold
                    ? <MenuFold class="menu menu-fold hide" />
                    : <Menu class="menu" />}
            </div>
        );
    }
}
export default NavigationBar;