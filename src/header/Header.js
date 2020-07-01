import React, { Component } from 'react';
import SocialMedia from './SocialMedia';
import Language from './Language';
import {FormattedMessage} from 'react-intl'

class Header extends Component {
    render(){
        return(
            <div className='header'>
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
