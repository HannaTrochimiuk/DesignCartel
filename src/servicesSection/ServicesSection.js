import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl'
import Service from './Service';

class ServicesSection extends Component {
    content = [{
        foto: 'url(http://localhost:5000/słońce.png)',
        idTitle: 'servicesSpace',
        idText: 'servicesTextSpace',
        textFirst:false
    },{
        foto: 'url(http://localhost:5000/strzałka.png)',
        idTitle: 'servicesWayfinding',
        idText: 'servicesTextWayfinding',
        textFirst:true
    },{
        foto: 'url(http://localhost:5000/serce.png)',
        idTitle: 'servicesPersonalization',
        idText: 'servicesTextPersonalization',
        textFirst:false
    },{
        foto: 'url(http://localhost:5000/korona.png)',
        idTitle: 'servicesIdentyfication',
        idText: 'servicesTextIdentyfication',
        textFirst:true
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