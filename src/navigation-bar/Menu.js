import React, { Component } from 'react';
import MenuButton from './MenuButton.js';


class Menu extends Component {
    render() {
        return(
            <div className="menu">
                <MenuButton name='o nas' link='#'/>
                <MenuButton name='usługi' link='#'/>
                <MenuButton name='projekty' link='#'/>
                <MenuButton name='kontakt' link='#'/>
            </div>
        );
    }
}

export default Menu;