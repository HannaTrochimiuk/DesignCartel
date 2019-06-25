import React, { Component } from 'react';
import logo from '../img/logo.jpg';


class Logo extends Component {
    render() {
        return(
            <img src={logo} className='logo-nav-bar' alt='error'/> 
        );
    }
}

export default Logo;
