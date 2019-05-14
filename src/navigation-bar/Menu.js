import React, { Component } from 'react';
import MenuButton from './MenuButton.js';


class Menu extends Component {
    render() {
        return(
            <div className="menu">
                <MenuButton class='btn-menu' id='about-section' name='o nas'/>
                <MenuButton class='btn-menu' id='services-section' name='usługi'/>
                <MenuButton class='btn-menu' id='project-section' name='projekty'/>
                <MenuButton class='btn-menu' id='contact' name='kontakt'/>
            </div>
        );
    }
}

export default Menu;