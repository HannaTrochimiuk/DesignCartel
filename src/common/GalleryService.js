import odwazny1 from '../img/odwazny_konferencyjna1_1000x666.jpg';
import odwazny2 from '../img/odwazny_hol1_1000x769.jpg';
import odwazny3 from '../img/odwazny_chill1_1000x731.jpg';
import odwazny4 from '../img/odwazny_copy1_1000x646.jpg';
import funkcjonalny1 from '../img/funkcjonalny_hol1_1000x666.jpg';
import funkcjonalny2 from '../img/funkcjonalny_akwarium_1000x666.jpg';
import radosnie1 from '../img/radosnie_recepcja1_1000x665.jpg';
import radosnie2 from '../img/radosnie_recepcja2_1000x604.jpg';
import zSercem1 from '../img/zSercem_kuchnia1_1000x665.jpg';
import zSercem2 from '../img/zSercem_kuchnia2_1000x709.jpg';
import zSercem3 from '../img/zSercem_kuchnia3_1000x702.jpg';
import zSercem4 from '../img/zSercem_kuchnia3kolor_1000x702.jpg';
import organicznie1 from '../img/organicznie_recepcja1_1000x666.jpg';
import naturalnie1 from '../img/naturalnie_openSpace_1000x666.jpg';
import zolty1 from '../img/zolty_meet_1000x668.jpg';
import nietypowa1 from '../img/nietypowa_konferencyjna_1000x691.jpg';


class GalleryService {

    getGallery = () => {
        return [[{
            id:0,
            original: odwazny1,
            thumbnail: odwazny1,
            originalClass: "card-foto"
        }, {
            id:1,
            original: odwazny2,
            thumbnail: odwazny2,
            originalClass: "card-foto"
        }, {
            id:2,
            original: odwazny3,
            thumbnail: odwazny3,
            originalClass: "card-foto"
        }, {
            id:3,
            original: odwazny4,
            thumbnail: odwazny4,
            originalClass: "card-foto"
        }], 
        [{
            id:0,
            original: funkcjonalny1,
            thumbnail:funkcjonalny1,
            originalClass: "card-foto"
        },
        {
            id:1,
            original: funkcjonalny2,
            thumbnail:funkcjonalny2,
            originalClass: "card-foto"
        }],
        [{
            id:0,
            original: radosnie1,
            thumbnail: radosnie1,
            originalClass: "card-foto"
        },{
            id:1,
            original: radosnie2,
            thumbnail:radosnie2,
            originalClass: "card-foto"
        }],
        [{
            id:0,
            original: zSercem1,
            thumbnail: zSercem1,
            originalClass: "card-foto"
        },
        {
            id:1,
            original: zSercem2,
            thumbnail: zSercem2,
            originalClass: "card-foto"
        },
        {
            id:2,
            original: zSercem3,
            thumbnail: zSercem3,
            originalClass: "card-foto"
        },
        {
            id:3,
            original: zSercem4,
            thumbnail: zSercem4,
            originalClass: "card-foto"
        }],
        [{
            id:0,
            original: organicznie1,
            thumbnail: organicznie1,
            originalClass: "card-foto" 
        }],
        [{
            id:0,
            original: naturalnie1,
            thumbnail:  naturalnie1,
            originalClass: "card-foto" 
        }],
        [{
            id:0,
            original: zolty1,
            thumbnail:  zolty1,
            originalClass: "card-foto" 
        }],
        [{
            id:0,
            original: nietypowa1,
            thumbnail: nietypowa1,
            originalClass: "card-foto"
        }]

        ]
    }
}
export default GalleryService;