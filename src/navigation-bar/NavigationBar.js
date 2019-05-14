import React, { Component } from 'react';
import Logo from './Logo';
import Menu from './Menu';
import MenuFold from './MenuFold';

class NavigationBar extends Component {
    render(){
        return(
            <div className = "navigation-bar">
                <Logo/>  
                <Menu/>
                <MenuFold />
            </div>
        );
    }
}
export default NavigationBar;