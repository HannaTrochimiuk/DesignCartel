import React, { Component } from 'react';

class MenuButton extends Component {
    
    render() {
        return (
            <button className="btn-menu">
                <a href={this.props.link} className="btn-menu__link">{this.props.name}</a>
            </button>
        );
    }
}

export default MenuButton;