import React, { Component } from 'react';
import arrowDown from '../img/svg/back.svg';


class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            index: 0
        }
    }
    showPrev = () => {
        const newIndex = this.state.index - 1;
        this.setState({
            index: newIndex
        })
    }
    showNext = () => {
        const newIndex = this.state.index + 1;
        this.setState({
            index: newIndex
        })
    }
    showIdFoto(id) {
        this.setState({
            index: id
        })
    }
    render() {
        return (
            <div>
                <div className='slider-wrapper'
                    style={{
                        'transform': `translateX(-${this.state.index * 100}%)`
                    }}>

                    {this.props.project.fileNames.map(fileName =>
                        <img 
                            key={fileName} 
                            alt='foto' 
                            className='gallery-foto' 
                            src={`http://localhost:5000/${fileName}`} />)}
                </div>
                <button
                    onClick={this.showPrev}
                    disabled={this.state.index === 0}
                    className='arrow-btn'>
                    <img alt='arrow' className='arrow-icon arrow-icon--prev' src={arrowDown} />
                </button>
                <button
                    onClick={this.showNext}
                    disabled={this.state.index === this.props.project.fileNames.length - 1}
                    className='arrow-btn arrow-btn--next'>
                    <img alt ='arrow' className='arrow-icon arrow-icon--next' src={arrowDown} />
                </button>
                <div className='slider-wrapper slider-wrapper--thumbnails'
                    style={{
                        'transform': `translateX(-${this.state.index * 7}vw)`
                    }}>
                    {
                        this.props.project.fileNames.map((fileName, index) =>
                            <button  key={fileName} onClick={() => this.showIdFoto(index)} className='thumbnail-btn'>
                                <img
                                    className={this.state.index === index ? 'gallery-foto-thumbnail gallery-foto-thumbnail--active' : 'gallery-foto-thumbnail'}
                                    src={`http://localhost:5000/${fileName}`}
                                    alt='foto' />
                            </button>)
                    }
                </div>
            </div>
        )
    }
}

export default Gallery;