import React, { Component } from 'react';
import Logo from './Logo';
import Menu from './Menu';
import MenuFold from './MenuFold';

class NavigationBar extends Component {
    render(){
        return(
            <div className = "navigation-bar">
                <Logo/>  
                <Menu class="menu"/>
                <MenuFold class="menu-fold hide" />
            </div>
        );
    }
}
export default NavigationBar;