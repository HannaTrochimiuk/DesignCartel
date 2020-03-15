import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl'

class ServicesSection extends Component {
    render() {
        return (
            <section className="services-section">
                <div className="title-box">
                    <h1 className="title">
                        <FormattedMessage id="menuServices"/>
                    </h1>
                </div>
                <div className="service">
                    <div className="service-foto service-foto--1"></div>
                    <div className="service-text-box service-text-box--left">
                        <div className="service-title">
                            <FormattedMessage id="servicesSpace"/>
                        </div>
                        <div className="service-text">
                            <FormattedMessage id="servicesTextSpace"/>
                        </div>
                    </div>
                    </div>

                    <div className="service">
                        <div className="service-text-box service-text-box--right">
                            <div className="service-title">
                                <FormattedMessage id="servicesWayfinding"/>
                            </div>
                            <div className="service-text">
                                <FormattedMessage id="servicesTextSpace"/>
                            </div>
                        </div>
                        <div className="service-foto service-foto--2"></div>
                    </div>

                    <div className="service">
                        <div className="service-foto service-foto--3"></div>
                        <div className="service-text-box service-text-box--left">
                            <div className="service-title">
                                <FormattedMessage id="servicesPersonalization"/>
                            </div>
                            <div className="service-text">
                                <FormattedMessage id="servicesTextPersonalization"/>
                            </div>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-text-box service-text-box--right">
                            <div className="service-title">
                                <FormattedMessage id="servicesIdentyfication"/>
                            </div>
                            <div className="service-text">
                                <FormattedMessage id="servicesTextIdentyfication"/>
                            </div>
                        </div>
                        <div className="service-foto service-foto--4"></div>
                    </div>
            </section>
                )
            };
        }
        
export default ServicesSection;