import React, {Component} from 'react';
import SocialMedia from '../header/SocialMedia';

class Contact extends Component {
    constructor(){
        super();
        this.callPhone=this.callPhone.bind(this);
        this.sendMail=this.sendMail.bind(this);
    }
    callPhone() {
        window.location.href="tel:+48 728 899 897"; 
        console.log('aa');
    }
    sendMail() {
        var selection = window.getSelection();
        if(selection.toString().length === 0) {
            window.location.href="mailto:hello@designcartel.pl";
        }
    }
    render(){
        return(
            <div className="contact">
                <button onClick={() => this.callPhone()}class="contact-text">+48 728 899 897</button>
                <div className="contact-logo">&nbsp;</div>
                <button onClick={() => this.sendMail()} class="contact-text low">hello@designcartel.pl</button>
                <SocialMedia class='social-media social-media-contact'/>
            </div>
        )   
    ;}
}

export default Contact;