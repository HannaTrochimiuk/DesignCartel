import React, { Component } from 'react';
import SocialMedia from './SocialMedia';
import Language from './Language';
import {FormattedMessage} from 'react-intl'


class Header extends Component{
    render(){
        return(
            <div className='header' style={{ backgroundImage: 'url(http://localhost:5000/odwazny_konferencyjna1.jpg)' }}>
                <div className = 'header__text-box'>
                    - <FormattedMessage id="servicesSpaceBranding"/> <br/>
                    - <FormattedMessage id="servicesPersonalization"/><br/>
                    - <FormattedMessage id="servicesWayfinding"/> </div>
                <SocialMedia class='social-media social-media-header'/>
                <Language />

                
            </div>
        )
    }
}

export default Header;
