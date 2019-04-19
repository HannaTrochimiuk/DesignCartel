import React, { Component } from 'react';
import SocialMedia from './SocialMedia';

class Header extends Component{
    render(){
        return(
            <div className='header'>
                <div className = 'text-box'>- space branding <br/>- wayfinding<br/>- fototapety <br/>- aranżacja ścian i przeszkleń </div>
                <SocialMedia/>
            </div>
        )
    }
}

export default Header;
