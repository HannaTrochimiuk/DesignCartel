import React, { Component } from 'react';
import MenuButton from './MenuButton.js';


class Menu extends Component {
    render() {
        return(
            <div className={this.props.class}>
                <MenuButton class='btn-menu' id='about-section' idText="menuAbout"/>
                <MenuButton class='btn-menu' id='services-section' idText="menuServices"/>
                <MenuButton class='btn-menu' id='project-section' idText="menuProjects"/>
                <MenuButton class='btn-menu' id='contact' idText="menuContact"/>
            </div>
        );
    }
}

export default Menu;