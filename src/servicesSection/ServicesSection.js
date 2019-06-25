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
                        <div className="service-title">space branding</div>
                        <div className="service-text">Przywiązanie Pracownika i Klienta do marki jest bardzo ważne. Sztuką jest odpowiednie wyważenie wielkości, ilości, skali zastosowania do danej powierzchni. Tak, aby brand, design i człowiek żyli w symbiozie i cała przestrzeń stanowiła spójny projekt. Na tym się znamy, w tym z przyjemnością Ci pomożemy. Jak? Stworzymy identyfikację wizualną przestrzeni skrojoną na miarę Twojej firmy. Dlaczego? Bo wizerunek biura jest niezwykle ważny w dobie employer brandingu i miejsca, jakie zajmuje w nim space branding. Zakres realizacji jest ustalany indywidualnie. Zajmiemy się jednym pomieszczeniem lub całym piętrem. Zespół i moc jest z nami, więc czekamy na kontakt i działamy.</div>
                    </div>
                </div>

                <div className="service">
                    <div className="service-text-box service-text-box--right">
                        <div className="service-title">wayfinding</div>
                        <div className="service-text">Innymi słowy jest to system orientacji przestrzennej. Stosuje się go właściwie w każdej przestrzeni komercyjnej. Hotel jest tu dobrym przykładem. Gość powinien czuć się zaopiekowany i móc bezproblemowo trafić do sali śniadaniowej, na siłownię czy do strefy SPA. Dzięki oznakowaniu kierunkowemu, indywidualnym oznaczeniom pomieszczeń czy komunikatom. Niezwykle ważne jest też, żeby użyte materiały były dopasowane do estetyki wnętrza, trwałe i praktyczne w danej przestrzeni.</div>
                    </div>
                    <div className="service-foto service-foto--2"></div>
                </div>

                <div className="service">
                    <div className="service-foto service-foto--3"></div>
                    <div className="service-text-box service-text-box--left">
                        <div className="service-title">personalizacja</div>
                        <div className="service-text">To sytuacja, kiedy Inwestorowi zależy na zupełnie indywidualnym podejściu do przestrzeni. Nie ukrywamy, że to nasza wymarzona sytuacja. Każdy element space brandingu i wayfindingu jest stworzony od początku do końca przez dział kreatywny. Odrzucamy stocki, zaprzęgamy wyobraźnię, illustratora i działamy.</div>
                    </div>
                </div>
                <div className="service">
                    <div className="service-text-box service-text-box--right">
                        <div className="service-title">complete identification</div>
                        <div className="service-text">Usługa, która łączy w sobie space branding, wayfinding, personalizację, a także identyfikację wizualną firmy/marki. To duże wyzwanie i wymaga pełnego zaangażowania i bliskiej współpracy. Skupiając wszystkie elementy w jednym rękach mamy większą kontrolę nad projektem i przewidywalny efekt. Dla nas, na pierwszym miejscu zawsze jest Człowiek - Użytkownik. Dlatego stawiamy na szerokie zbadanie potrzeb, ale też poznanie firmy i pracujących w niej ludzi. Ta część jest kluczowa dla udanego projektu.</div>
                    </div>
                    <div className="service-foto service-foto--4"></div>
                </div>
            </section>
        )
    };
}

export default ServicesSection;