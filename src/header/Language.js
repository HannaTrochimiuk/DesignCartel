import React, { Component } from 'react';
import App from '../App.js';


class Language extends Component {
    render() {
        return(
            <div className='language-box'>
                <button 
                    onClick={App.language==='pl'? App.toggleLanguage() : null} 
                    className={"language-btn" + (App.language === 'en' ? " active" : '')}>
                    EN</button>
                <button 
                    onClick={App.language==='en'? App.toggleLanguage() : null} 
                    className={"language-btn" + (App.language === 'pl' ? " active" : '')}
                    >PL</button>
            </div>
            
        )
    }
}

export default Language;