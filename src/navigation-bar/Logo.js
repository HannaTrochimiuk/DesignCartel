import React, { Component } from 'react';
import logo from '../img/logo.jpg';
import logotemp from '../img/logoSqr.jpg';


class Logo extends Component {
    render() {
        return(

            // <div className='logo-box'>
                <img src={logo} className='logo-nav-bar' alt='error'/>
            // {/* </div> */}
            // <div class='logo-temp'>
            //     <img src={logotemp} className='logo-tempo-logo' alt='error'/>
            // </div>
            
        );
    }
}

export default Logo;
