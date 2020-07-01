import React, { Component } from 'react';
import SocialMedia from '../header/SocialMedia';
import logoSqr from '../img/logoSqr.jpg';

class Contact extends Component {
    callPhone = () => {
        window.location.href = "tel:+48 728 899 897";
    }
    sendMail = () => {
        var selection = window.getSelection();
        if (selection.toString().length === 0) {
            window.location.href = "mailto:hello@designcartel.pl";
        }
    }
    render() {
        return (
            <div className="contact">
                <button onClick={() => this.callPhone()} className="contact-text">+48 728 899 897</button>
                <img className='contact-logo' src={logoSqr} alt='logo'></img>
                <button onClick={() => this.sendMail()} className="contact-text low">hello@designcartel.pl</button>
                <SocialMedia class='social-media social-media-contact' />
            </div>
        )
            ;
    }
}

export default Contact;