import React, { Component } from 'react';
import MenuButton from './MenuButton.js';
import Menu from './Menu';


class ManuFold extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.querySelector('.menu-fold').classList.remove('hide');
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
        this.setState({ showMenu: false }, () => {
            document.querySelector('.menu-fold').classList.add('hide');

            document.removeEventListener('click', this.closeMenu);
        });
    }



    render() {
        return (
            <div className='menu-fold-box'>
                <button className='menu-fold-btn' onClick={this.showMenu}>menu</button>
                <Menu class={this.props.class} />
            </div>


        );
    }
}

export default ManuFold;
