import React, {Component} from 'react';
import Values from './Values';

class AboutSection extends Component {
    render() {
        return(
            <section className='about-section' id='about-section'>
                <div className='title-box'>
                    <h1 className='title'>o nas</h1>
                </div>
                <div className='about-text'>Design Cartel to grupa ludzi kochających wnętrza i dobry design. Od kilku lat skupiliśmy się na wnętrzach komercyjnych i z radością otwieramy każdy nowy projekt. Współpracujemy z inwestorem, architektem lub projektantem i wspólnie dobieramy do projektu elementy, materiały, znajdujemy rozwiązania. Wszyscy jesteśmy naprawdę otwarci i, co nie jest zbyt częste, po prostu lubimy ludzi. Praca nad projektem ma być efektywna, sprawna, ale w uczciwej, pozytywnej atmosferze pełnej zrozumienia i uwagi. I to, już na starcie dajemy od siebie każdemu naszemu Klientowi. Gwarancję uczciwości i profesjonalizmu z uśmiechem na ustach. Zapraszamy do wspólnego działania.</div>
                <Values />
            </section>
        )
    };
}

export default AboutSection;
