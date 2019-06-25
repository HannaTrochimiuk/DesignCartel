import React, { Component } from 'react';
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';




class Popup extends Component {
    constructor(props) {
        super(props);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        document.addEventListener('keydown', this.escPress);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
        document.removeEventListener('keydown', this.escPress);
    }
    componentDidUpdate() {
        this.galleryComponent.slideToIndex(0);
        
    }

    hidePopup = () => {
        document.querySelector('.popup').classList.add('popup-hide');
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.hidePopup();
        }
      }
    escPress =(event) => {
        if(event.keyCode==27){
            this.hidePopup();
        }
    }  

    render() {
        return (
            <div className="popup popup-hide">
                <div ref={this.setWrapperRef} className='popup-content'>
                    <div className='popup-left'>
                        <ImageGallery
                            ref={(component) => this.galleryComponent = component}
                            items={this.props.gallery}
                            showFullscreenButton={false} 
                            
                            showPlayButton={false}/>
                    </div>
                    <div className='popup-right'>
                        <div className='popup-information'>
                            <div className='popup-information--title'>
                                {this.props.title}
                            </div>
                            <div className='popup-information--text'>
                                {this.props.description}
                            </div>
                        </div>
                       
                    </div>
                    <button className="popup-exit" onClick={() => this.hidePopup()}>x</button>
                </div>
            </div>
        )
    };
}

export default Popup;