import React, { Component } from 'react';
import fbIcon from '../img/svg/facebook.svg';
import insIcon from '../img/svg/instagram.svg';

class SocialMedia extends Component {
    render() {
        return (
            <div className={this.props.class}>
                <a href='https://www.facebook.com/Design-Cartel-2160779044016659'
                    className='social-media-btn'>
                    <img alt='facebook' src={fbIcon} />
                </a>
                <a href='https://www.instagram.com/cartel.design/ '
                    className='social-media-btn'>
                    <img alt='instagram' src={insIcon} />
                </a>
            </div>
        );
    }
}

export default SocialMedia;
