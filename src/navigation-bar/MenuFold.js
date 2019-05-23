import React, { Component } from 'react';
import MenuButton from './MenuButton.js';

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
                <div className='menu-fold hide'>
                    <MenuButton class='btn-menu' id='about-section' name='o nas' />
                    <MenuButton class='btn-menu' id='services-section' name='usługi' />
                    <MenuButton class='btn-menu' id='project-section' name='projekty' />
                    <MenuButton class='btn-menu' id='contact' name='kontakt' />
                </div>
            </div>


        );
    }
}

export default ManuFold;
