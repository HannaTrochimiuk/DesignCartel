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
import odwazny1_big from '../img/odwazny_konferencyjna1.jpg';
import odwazny2_big from '../img/odwazny_hol1.jpg';
import odwazny3_big from '../img/odwazny_chill1.jpg';
import odwazny4_big from '../img/odwazny_copy1.jpg';
import funkcjonalny1_big from '../img/funkcjonalny_hol1.jpg';
import funkcjonalny2_big from '../img/funkcjonalny_akwarium.jpg';
import radosnie1_big from '../img/radosnie_recepcja1.jpg';
import radosnie2_big from '../img/radosnie_recepcja2.jpg';
import zSercem1_big from '../img/zSercem_kuchnia1.jpg';
import zSercem2_big from '../img/zSercem_kuchnia2.jpg';
import zSercem3_big from '../img/zSercem_kuchnia3.jpg';
import zSercem4_big from '../img/zSercem_kuchnia3kolor.jpg';
import organicznie1_big from '../img/organicznie_recepcja1.jpg';
import naturalnie_big from '../img/naturalnie_openSpace.jpg';
import zolty1_big from '../img/zolty_meet.jpg';
import nietypowa1_big from '../img/nietypowa_konferencyjna.jpg';


class GalleryService {

    getGallery = () => {
        return [[{
            id:0,
            big: odwazny1_big,
            medium:odwazny1,
            thumbnail: odwazny1,
            originalClass: "card-foto"
        }, {
            id:1,
            big: odwazny2_big,
            medium: odwazny2,
            thumbnail: odwazny2,
            originalClass: "card-foto"
        }, {
            id:2,
            big:  odwazny2_big,
            medium: odwazny2,
            thumbnail: odwazny3,
            originalClass: "card-foto"
        }, {
            id:3,
            big: odwazny4_big,
            medium:odwazny4,
            thumbnail: odwazny4,
            originalClass: "card-foto"
        }], 
        [{
            id:0,
            big: funkcjonalny1_big,
            medium:funkcjonalny1,
            thumbnail:funkcjonalny1,
            originalClass: "card-foto"
        },
        {
            id:1,
            big: funkcjonalny2_big,
            medium:funkcjonalny2,
            thumbnail:funkcjonalny2,
            originalClass: "card-foto"
        }],
        [{
            id:0,
            big: radosnie1_big,
            medium: radosnie1,
            thumbnail: radosnie1,
            originalClass: "card-foto"
        },{
            id:1,
            big: radosnie2_big,
            medium:radosnie2,
            thumbnail:radosnie2,
            originalClass: "card-foto"
        }],
        [{
            id:0,
            big: zSercem1_big,
            medium: zSercem1,
            thumbnail: zSercem1,
            originalClass: "card-foto"
        },
        {
            id:1,
            big: zSercem2,
            thumbnail: zSercem2,
            originalClass: "card-foto"
        },
        {
            id:2,
            big: zSercem3,
            thumbnail: zSercem3,
            originalClass: "card-foto"
        },
        {
            id:3,
            big: zSercem4,
            thumbnail: zSercem4,
            originalClass: "card-foto"
        }],
        [{
            id:0,
            big: organicznie1,
            thumbnail: organicznie1,
            originalClass: "card-foto" 
        }],
        [{
            id:0,
            big: naturalnie1,
            thumbnail:  naturalnie1,
            originalClass: "card-foto" 
        }],
        [{
            id:0,
            big: zolty1,
            thumbnail:  zolty1,
            originalClass: "card-foto" 
        }],
        [{
            id:0,
            big: nietypowa1,
            thumbnail: nietypowa1,
            originalClass: "card-foto"
        }]

        ]
    }
}
export default GalleryService;