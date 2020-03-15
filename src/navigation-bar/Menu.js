import React, { Component } from 'react';
import MenuButton from './MenuButton.js';

class Menu extends Component {
    render() {
        return(
            <div className={this.props.class}>
                <MenuButton id='about-section' idText="menuAbout"/>
                <MenuButton id='services-section' idText="menuServices"/>
                <MenuButton id='project-section' idText="menuProjects"/>
                <MenuButton id='contact' idText="menuContact"/>
            </div>
        );
    }
}

export default Menu;