import React, { Component } from 'react';

class ServicesSection extends Component {
    render() {
        return (
            <section className="services-section">
                <div className="title-box">
                    <h1 className="title">usługi</h1>
                </div>
                <div className="service">
                    <div className="service-foto service-foto--1"></div>
                    <div className="service-text-box service-text-box--left">
                        <div className="service-title">Lorem ipsum</div>
                        <div className="service-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    </div>
                </div>

                <div className="service">
                    <div className="service-text-box service-text-box--right">
                        <div className="service-title">Lorem ipsum</div>
                        <div className="service-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    </div>
                    <div className="service-foto service-foto--2"></div>
                </div>

                <div className="service">
                    <div className="service-foto service-foto--3"></div>
                    <div className="service-text-box service-text-box--left">
                        <div className="service-title">Lorem ipsum</div>
                        <div className="service-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    </div>
                </div>
            </section>
        )
    };
}

export default ServicesSection;