import React, { Component } from 'react';
import foto1 from '../img/room.jpg';
import foto2 from '../img/room-bw.jpg';
import foto3 from '../img/foto-1.jpg'
import foto4 from '../img/foto-2.jpg';
import foto5 from '../img/foto-3.jpg';

import next from '../img/svg/next.svg';
import back from '../img/svg/back.svg';

import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';


const photos = [{
    photo: foto1,
    index: 0
}, {
    photo: foto2,
    index: 1
}, {
    photo: foto3,
    index: 2
}, {
    photo: foto4,
    index: 3
}, {
    photo: foto5,
    index: 4
}
];

class Popup extends Component {
    constructor() {
        super();
        this.state = {
            number: 0,
            galleryItems: photos.map(photo => <img src={photo.photo} key={photo.index} className="card-foto" />)
            // galleryItems: [1, 2, 3].map((i) => (<h2 key={i}>{i}</h2>))
        };
    }

    nextFoto = () => {
        console.log(this.state.number);
        if (photos[this.state.number + 1]) {
            this.setState({ number: this.state.number + 1 });
        } else {
            this.setState({ number: 0 });
        }
    }

    prevFoto = () => {
        if (photos[this.state.number - 1]) {
            this.setState({ number: this.state.number - 1 });
        } else {
            ;
            this.setState({ number: photos.length - 1 });
        }
    }
    hidePopup = (number) => {
        document.querySelector('.popup--' + number).classList.add('popup-hide');
    }

    render() {
        const images = [
            {
                original: 'http://lorempixel.com/1000/600/nature/1/',
                thumbnail: 'http://lorempixel.com/250/150/nature/1/',
                originalClass: "card-foto"
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/2/',
                thumbnail: 'http://lorempixel.com/250/150/nature/2/',
                originalClass: "card-foto"
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/3/',
                thumbnail: 'http://lorempixel.com/250/150/nature/3/',
                originalClass: "card-foto"
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/1/',
                thumbnail: 'http://lorempixel.com/250/150/nature/1/',
                originalClass: "card-foto"
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/2/',
                thumbnail: 'http://lorempixel.com/250/150/nature/2/',
                originalClass: "card-foto"
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/3/',
                thumbnail: 'http://lorempixel.com/250/150/nature/3/',
                originalClass: "card-foto"
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/1/',
                thumbnail: 'http://lorempixel.com/250/150/nature/1/',
                originalClass: "card-foto"
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/2/',
                thumbnail: 'http://lorempixel.com/250/150/nature/2/',
                originalClass: "card-foto"
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/3/',
                thumbnail: 'http://lorempixel.com/250/150/nature/3/',
                originalClass: "card-foto"
            }
        ]
        return (
            <div className="popup popup--1 popup-hide">
                <div className='popup-content'>
                    <div className='popup-left'>
                        <ImageGallery 
                        items={images} 
                        showFullscreenButton={false}/>
                    </div>
                    <div className='popup-right'>
                        <div className='popup-information'>
                            <div className='popup-information--title'>
                                Lorem Ipsum
                            </div>
                            <div className='popup-information--text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl enim, placerat in lobortis aliquet, placerat in mi. Nunc quis libero imperdiet, pellentesque odio quis, faucibus ex. Suspendisse potenti. Phasellus ligula ipsum, rhoncus non justo nec, facilisis tempus velit. Morbi ut elit luctus quam porta imperdiet in vitae magna. Sed condimentum dapibus velit non venenatis. Nam non lectus volutpat, interdum nibh non, dapibus mi. Proin rutrum nisl sed libero commodo scelerisque. Quisque in ultrices dui, vel sollicitudin magna. Vestibulum placerat accumsan leo vitae iaculis. 
                            </div>
                        </div>
                        <button className="popup-exit" onClick={() => this.hidePopup(1)}>x </button>
                    </div>
                </div>
            </div>
        )
    };
}

export default Popup;