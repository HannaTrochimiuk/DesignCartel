import React, { Component } from 'react';
import foto1 from '../img/room.jpg';
import foto2 from '../img/room-bw.jpg';
import foto3 from '../img/foto-1.jpg'
import foto4 from '../img/foto-2.jpg';
import foto5 from '../img/foto-3.jpg';

import next from '../img/svg/next.svg';
import back from '../img/svg/back.svg';
// import AliceCarousel from 'react-alice-carousel';

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
        this.state = { number: 0 };
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
        return (
            <div className="popup popup--1 popup-hide">
                <div className='popup-content'>
                    <div className='popup-left'>
                        <div className='gallery-top'>
                            <img src={photos[this.state.number].photo} alt='arr' className='foto-main' />
                            <button className='arrow-btn arrow-btn--prev' onClick={() => this.prevFoto()}>
                                <img src={back} />
                            </button>
                            <button className='arrow-btn arrow-btn--next' onClick={() => this.nextFoto()}>
                                <img src={next} />
                            </button>
                        </div>
                        <div className='gallery-bottom'>
                            <div className='gallery-wrapper' style={{
                                'transform': `translateX(-${photos[this.state.number].index * (100 / photos.length)}%)`
                            }}>

                                {/* <AliceCarousel> */}
                                {
                                    photos.map(photo =>

                                        <img src={photo.photo} alt='error' className='card-foto' />
                                    )
                                }
                                {/* </AliceCarousel> */}
                            </div>

                        </div>
                    </div>
                    <div className='popup-right'>
                        <button className='popup-exit' onClick={() => this.hidePopup(1)}>x</button>
                        <div className='popup-information'>
                            <div className='popup-information--title'>
                                Lorem ipsum
                                        </div>
                            <div className='popup-information--text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </div>
                        </div>
                    </div>
                </div>
            </div >

            // <div className='popup popup--1 popup-hide'>
            //     <div className='popup-content'>
            //         <div className='popup-left'>
            //             <div className='gallery-top'>
            //                 <img src={photos[this.state.number].photo} alt='foto-main' className='foto-main' />
            //                 <button className='arrow-btn arrow-btn--prev' onClick={() => this.prevFoto()}>
            //                     <img src={back} />
            //                 </button>
            //                 <button className='arrow-btn arrow-btn--next' onClick={() => this.nextFoto()}>
            //                     <img src={next} />
            //                 </button>
            //             </div>
            //             <div className='gallery-bottom'>
            //                 <div className={`cards-slider active-slide-${photos[this.state.number].index}`}>
            //                     <div className='cards-slider-wrapper' style={{
            //                         'transform': `translateX(-${photos[this.state.number].index * (100 / photos.length)}%)`
            //                     }}>
            //                         {
            //                             photos.map(photo =>
            //                                 <div className='card'>
            //                                     <img src={photo.photo} alt='error' className='card-foto' />
            //                                 </div>)
            //                         }
            //                     </div>

            //                 </div>
            //             </div>
            //         </div>
            //         <div className='popup-right'>
            //             <button className='popup-exit' onClick={() => this.hidePopup(1)}>x</button>
            //             <div className='popup-information'>
            //                 <div className='popup-information--title'>
            //                     Lorem ipsum
            //                              </div>
            //                 <div className='popup-information--text'>
            //                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            //                            </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        )
    };
}

export default Popup;