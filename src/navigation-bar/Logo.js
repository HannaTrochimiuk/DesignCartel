import React, { Component } from 'react';
import logo from '../img/logo.jpg';


class Logo extends Component {

    constructor(){
        super();

    }
    scrollToTop = () => {
        console.log('dupa');
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })    
    }
    render() {
        return (
            <button onClick={this.scrollToTop } className='logo-nav-bar-box'>
                <img src={logo} className='logo-nav-bar' alt='error' />
            </button>
        );
    }
}

export default Logo;
