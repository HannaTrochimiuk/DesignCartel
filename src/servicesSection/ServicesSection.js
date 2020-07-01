import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl'
import Service from './Service';
import serce from '../img/serce.png';
import strzałka from '../img/strzałka.png';
import korona from '../img/korona.png';
import słońce from '../img/słońce.png';


class ServicesSection extends Component {
    content = [{
        foto: słońce,
        idTitle: 'servicesSpace',
        idText: 'servicesTextSpace',
        textFirst: false
    }, {
        foto: strzałka,
        idTitle: 'servicesWayfinding',
        idText: 'servicesTextWayfinding',
        textFirst: true
    }, {
        foto: serce,
        idTitle: 'servicesPersonalization',
        idText: 'servicesTextPersonalization',
        textFirst: false
    }, {
        foto: korona,
        idTitle: 'servicesIdentyfication',
        idText: 'servicesTextIdentyfication',
        textFirst: true
    }]
    render() {
        return (
            <section className="services-section">
                <div className="title-box">
                    <h1 className="title">
                        <FormattedMessage id="menuServices" />
                    </h1>
                </div>
                {this.content.map(el => <Service key={el.idTitle} element={el} />)}
            </section>
        )
    };
}

export default ServicesSection;