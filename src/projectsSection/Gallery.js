import React, { Component } from 'react';
import foto1 from '../img/room.jpg';
import foto2 from '../img/room-bw.jpg';
import foto3 from '../img/foto-1.jpg'
import foto4 from '../img/foto-2.jpg';
import foto5 from '../img/foto-3.jpg';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


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

export default class Gallery extends Component {


    constructor() {
        super();
        this.state = {
            currentIndex: 0,
            galleryItems: photos.map(photo => <img src={photo.photo} key={photo.index} className="card-foto" />)
        };
    }
    responsive = {
        0: { items: 1 },
       
    }

    onSlideChange(e) {
        console.debug('Item`s position during a change: ', e.item)
        console.debug('Slide`s position during a change: ', e.slide)
    }

    onSlideChanged(e) {
        console.debug('Item`s position after changes: ', e.item)
        console.debug('Slide`s position after changes: ', e.slide)
    }

    slideTo = (i) => this.setState({ currentIndex: i })

    // thumbItem = (item, i) => <img src={item.photo} key={'thumb' + i} onClick={() => this.slideTo(i)} className="card-foto-small"  />

    render() {
        return (
            <div>
                <AliceCarousel
                    items={this.state.galleryItems}
                    // responsive={this.responsive}
                    autoPlayInterval={2000}
                    autoPlayDirection="rtl"
                    // autoPlay={true}
                    // fadeOutAnimation={true}
                    mouseDragEnabled={true}
                    disableAutoPlayOnAction={true}
                    onSlideChange={this.onSlideChange}
                    onSlideChanged={this.onSlideChanged}
                    // slideToIndex={this.state.currentIndex}
                    // dotsDisabled={true}
                />
                 {/* <ul>{this.state.galleryItems.map(this.thumbItem)}</ul> */}
             </div>
        )
    }
}