import React, { Component } from 'react';
import SocialMedia from './SocialMedia';
import Language from './Language';
import {FormattedMessage} from 'react-intl'


class Header extends Component{
    render(){
        return(
            <div className='header'>
                <div className = 'header__text-box'>
                    - space branding <br/>
                    - <FormattedMessage id="servicesPersonalization"/>
                    <br/>- wayfinding </div>
                <SocialMedia  class='social-media social-media-header'/>
                <Language toggleLanguage={this.props.toggleLanguage}/>

                
            </div>
        )
    }
}

export default Header;
