import React, { Component } from 'react';
import Logo from './Logo';
import Menu from './Menu';

class NavigationBar extends Component {
    render(){
        return(
            <div className = "navigation-bar">
                <Logo/>  
                <Menu/>
            </div>
        );
    }
}
export default NavigationBar;