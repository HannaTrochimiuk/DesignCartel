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
                        <div className="service-title">Space branding</div>
                        <div className="service-text">Przywiązanie Pracownika i Klienta do marki jest bardzo ważne. Sztuką jest odpowiednie wyważenie wielkości, ilości, skali zastosowania do danej powierzchni. Tak, aby brand, design i człowiek żyli w symbiozie i cała przestrzeń stanowiła spójny projekt. Na tym się znamy, w tym z przyjemnością Ci pomożemy. Jak? Dzięki dobremu projektowi tworzonemu z poszanowaniem wartości firmy, zgodnie z brand bookiem. Zajmiemy się głównie ścianami, sufitami, przeszkleniami, drzwiami, strefą wejścia. Jeśli jest projekt od architekta - na nim się oprzemy i dopełnimy naszymi grafikami całości. Wypracujemy wspólnie koncepcję i przełożymy ją na gotowe projekty. Zakres realizacji jest ustalany indywidualnie. Zajmiemy się jedną ścianą lub całym piętrem. Zespół i moc jest z nami, więc czekamy na kontakt i działamy.</div>
                    </div>
                </div>

                <div className="service">
                    <div className="service-text-box service-text-box--right">
                        <div className="service-title">Wayfinding</div>
                        <div className="service-text">Innymi słowy jest to oznakowanie przestrzeni. Stosuje się je właściwie w każdej przestrzeni komercyjnej. Na przykład w restauracji i oznakowaniu toalet może być czymś bardziej kreatywnym niż niebiesko - biała tabliczką z napisem WC, kupionym w sklepie BHP. Hotel to świetny przykład, gdzie wayfinding jest bardzo istotny. Gość hotelowy powienien czuć się zaopiekowany i móc bezproblemowo trafić do sali śniadaniowej, na siłownię czy do strefy SPA. Niezwykle ważne jest też, żeby materiały używane do oznakowania były dopasowane do estetyki wnętrza. Były spójne, ale także trwałe i praktyczne w danej przestrzeni.</div>
                    </div>
                    <div className="service-foto service-foto--2"></div>
                </div>

                <div className="service">
                    <div className="service-foto service-foto--3"></div>
                    <div className="service-text-box service-text-box--left">
                        <div className="service-title">Pimp Up</div>
                        <div className="service-text">Długo myśleliśmy jak nazwać tę usługę. W skrócie mówiąc, chodzi o “dosmaczenie wnętrza”. Załóżmy, że jest biuro, w którym są ergonomiczne, dobrze zaprojektowane meble, układ funkcjonalny jest ok, są nawet rośliny, ale… brakuje tego “czegoś”. Wchodząc do pomieszczenia nie widać jaka to firma, jacy ludzie tu pracują, czym się interesują, jakie są ich pasje. I tu pojawiamy się my i robimy metamorfozę za pomocą szybkich narzędzi. Drukujemy, wycinamy, oklejamy, ale najpierw to, co najważniejsze. Rozmowa, koncepcja i projekt. Od tego wszystko się zaczyna.</div>
                    </div>
                </div>
                <div className="service">
                    <div className="service-text-box service-text-box--right">
                        <div className="service-title">Full office project</div>
                        <div className="service-text">Kompleksowy projekt biura. Od projektu funkcjonalnego przez projekt wnętrza, zarządzanie nim aż do przeprowadzki i wielkiego otwarcia. To najszersze z możliwych działań. Wymaga dużo dyscypliny, terminowości, ale przede wszystkim otwartej głowy i zaangażowania. Na pierwszym miejscu zawsze jest dla nas Człowiek - Użytkownik. Dlatego stawiamy na szerokie zbadanie potrzeb, ale też poznanie firmy i pracujących w niej ludzi. Ta część jest kluczowa dla udanego projektu. Pracujemy zawsze ze sprawdzonymi i uczciwymi Partnerami, to daje nam bezpieczeństwo realizacji.</div>
                    </div>
                    <div className="service-foto service-foto--2"></div>
                </div>
            </section>
        )
    };
}

export default ServicesSection;