import React, { Component } from 'react';
import SocialMedia from './SocialMedia';

class Header extends Component{
    render(){
        return(
            <div className='header'>
                <div className = 'header__text-box'>- space branding <br/>- personalizacja<br/>- wayfinding </div>
                <SocialMedia  class='social-media social-media-header'/>
            </div>
        )
    }
}

export default Header;
