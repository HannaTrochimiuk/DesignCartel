import React, { Component } from 'react';
import fbIcon from '../img/svg/facebook.svg';

class SocialMedia extends Component {
    render() {
        return (
            <div className='social-media'>
                <img src={fbIcon} />
            </div>

        );
    }
}

export default SocialMedia;