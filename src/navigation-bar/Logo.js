import React, { Component } from 'react';
import logo from '../img/logo.jpg';


class Logo extends Component {
    render() {
        return(
            <div class='logo-box'>
                <img src={logo} className='logo-nav-bar' alt='error'/>
            </div>
            
        );
    }
}

export default Logo;
