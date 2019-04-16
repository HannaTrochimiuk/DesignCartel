import React, { Component } from 'react';
import fbIcon from '../img/svg/facebook.svg';
import insIcon from '../img/svg/instagram.svg';
import twiIcon from '../img/svg/twiter.svg';

class SocialMedia extends Component {
    render() {
        return (
            <div className='social-media'>
                <button className='btn-social-media'>
                    <img src={fbIcon} />
                </button>
                <button className='btn-social-media'>
                    <img src={insIcon} />
                </button>
                <button className='btn-social-media'>
                    <img src={twiIcon} />
                </button>
            </div>
        );
    }
}

export default SocialMedia;
