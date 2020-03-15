import React, { Component } from 'react';
import Menu from './Menu';

class ManuFold extends Component {
    constructor() {
        super();
        this.state = {
            showMenu: false,
        };
    }

    toggleMenu = ()=> {
        this.setState({showMenu: !this.state.showMenu }, () => {
            this.state.showMenu ?  document.addEventListener('click', this.toggleMenu)
            : document.removeEventListener('click', this.toggleMenu);
        });
    }

    render() {
        return (
            <div className='menu-fold-box'>
                <button className='menu-fold-btn' onClick={this.toggleMenu}>menu</button>
                <Menu class={this.state.showMenu ? 'menu menu-fold' : 'menu menu-fold hide'} />
            </div>
        );
    }
}

export default ManuFold;
