import odwazny1 from '../img/odwazny_konferencyjna1_1000x666.jpg';
import funkcjonalny1 from '../img/funkcjonalny_hol1_1000x666.jpg';
import radosnie1 from '../img/radosnie_recepcja1_1000x665.jpg';
import zSercem1 from '../img/zSercem_kuchnia1_1000x665.jpg';
import organicznie1 from '../img/organicznie_recepcja1_1000x666.jpg';
import naturalnie1 from '../img/naturalnie_openSpace_1000x666.jpg';
import zolty1 from '../img/zolty_meet_1000x668.jpg';
import nietypowa1 from '../img/nietypowa_konferencyjna_1000x691.jpg';


class ProjectService {
    getProjects = () => {
        return [{
            id: 0,
            foto: odwazny1,
            description:  "braveText",
            title: 'brave'
        }, {
            id: 1,
            foto: funkcjonalny1,
            description: 'functionalText',
            title: 'functional'
        }, {
            id: 2,
            foto: radosnie1,
            description: 'happilyText',
            title: 'happily'
        }, {
            id: 3,
            foto: zSercem1,
            description: 'withHeartText',
            title: 'withHeart'
        },  {
            id: 4,
            foto: organicznie1,
            description: 'biophilicText',
            title: 'biophilic' 
        }, {
            id: 5,
            foto: naturalnie1,
            description: 'naturalText',
            title: 'natural' 
        },{
            id:6,
            foto:zolty1,
            description:'yellowText',
            title: 'yellow'
        }, {
            id:7,
            foto:nietypowa1,
            description: 'untypicalText',
            title: 'untypical'
        }];
    }
}

export default ProjectService;
