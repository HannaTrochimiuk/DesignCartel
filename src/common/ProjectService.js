import odwazny1 from '../img/odwazny_konferencyjna1_1000x666.jpg';
import funkcjonalny1 from '../img/funkcjonalny_hol1_1000x666.jpg';
import radosnie1 from '../img/radosnie_recepcja1_1000x665.jpg';
import zSercem1 from '../img/zSercem_kuchnia1_1000x665.jpg';
import organicznie1 from '../img/organicznie_recepcja1_1000x666.jpg';
import naturalnie1 from '../img/naturalnie_openSpace_1000x666.jpg';
import zolty1 from '../img/zolty_meet_1000x668.jpg';
import nietypowa1 from '../img/nietypowa_konferencyjna_1000x691.jpg';

const axios = require('axios');

class ProjectService {
    getProjects = () => {
        return [{
            id: 0,
            foto: odwazny1,
            description: 'Sala konferencyjna.\nHol.\nCiąg komunikacyjny.\nStrefa relaksu.\nPrinting Point.',
            title: 'Odważny'
        }, {
            id: 1,
            foto: funkcjonalny1,
            description: 'Hol. Ciąg komunikacyjny. Szklane ściany. Pokoje.',
            title: ' Funkcjonalny'
        }, {
            id: 2,
            foto: radosnie1,
            description: 'Recepcja. Strefa wejścia wraz z poczekalnią dla Gości. Gabinety.',
            title: 'Radośnie'
        }, {
            id: 3,
            foto: zSercem1,
            description: 'Kuchnia. Jadalnia. Chill out.',
            title: 'Z sercem'
        },  {
            id: 4,
            foto: organicznie1,
            description: 'Recepcja. Strefa dla Gości.',
            title: 'Organicznie' 
        }, {
            id: 5,
            foto: naturalnie1,
            description: 'Strefa Co-workingu.',
            title: 'Naturalnie' 
        },{
            id:6,
            foto:zolty1,
            description:'Pokoje Pracowników wraz z przestrzenią dla Gości.',
            title: 'Żółty'
        }, {
            id:7,
            foto:nietypowa1,
            description: 'Sala konferencyjna / Sala szkoleniowa',
            title: 'Nietypowa'
        }];
    }
    getProjectsFromBackend = () => {
        axios.get('http://localhost:5000/projects')
            .then(function(res) {
                console.log(res.data);
            });
    };
}

export default ProjectService;
