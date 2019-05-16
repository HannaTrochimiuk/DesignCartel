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
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }

    render() {
        return (
            <div className="menu-fold-box">
                <button className="menu-fold-btn" onClick={this.showMenu}>
                    menu
                </button>
                {/* <div className="menu-fold-background">a</div> */}

                {
                    this.state.showMenu
                        ? (
                            <div className="menu-fold">
                                <MenuButton class='btn-menu' id='about-section' name='o nas' />
                                <MenuButton class='btn-menu' id='services-section' name='usługi' />
                                <MenuButton class='btn-menu' id='project-section' name='projekty' />
                                <MenuButton class='btn-menu' id='contact' name='kontakt' />
                            </div>
                        )
                        : (
                            null
                        )
                }

            </div>

        );
    }
}

export default ManuFold;
