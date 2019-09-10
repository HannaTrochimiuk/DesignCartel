import React, {Component} from 'react';
import Values from './Values';
import {FormattedMessage} from 'react-intl';

class AboutSection extends Component {
    constructor(){
        super();
        this.aboutText='Design Cartel to grupa ludzi kochających wnętrza i dobry design. Od kilku lat skupiliśmy się na wnętrzach komercyjnych. Współpracujemy z inwestorem, architektem lub projektantem i wspólnie dobieramy do projektu elementy, materiały, znajdujemy rozwiązania. Wszyscy jesteśmy naprawdę otwarci i, co nie jest zbyt częste, po prostu lubimy ludzi. Praca nad projektem ma być efektywna, sprawna, ale w uczciwej, pozytywnej atmosferze pełnej zrozumienia i uwagi. I to, już na starcie dajemy od siebie każdemu naszemu Klientowi. Gwarancję uczciwości i profesjonalizmu z uśmiechem na ustach. Zapraszamy do wspólnego działania.'
    }
    render() {
        return(
            <section className='about-section' id='about-section'>
                <div className='title-box'>
                    <h1 className='title'>
                        <FormattedMessage id ='menuAbout' />
                    </h1>
                </div>
                <div className='about-text'>
                    <FormattedMessage id ='aboutText' />
                </div>
                <Values  />
            </section>
        )
    };
}

export default AboutSection;
