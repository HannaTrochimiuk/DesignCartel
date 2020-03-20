import React, { Component } from 'react';
import Values from './Values';
import { FormattedMessage } from 'react-intl';

class AboutSection extends Component {
    render() {
        return (
            <section className='about-section' id='about-section'>
                <div className='title-box'>
                    <h1 className='title'>
                        <FormattedMessage id='menuAbout' />
                    </h1>
                </div>
                <div className='about-text'>
                    <FormattedMessage id='aboutText' />
                </div>
                <Values />
            </section>
        )
    };
}

export default AboutSection;
