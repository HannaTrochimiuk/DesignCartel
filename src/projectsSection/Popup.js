import React, { Component } from 'react';
import arrowDown from '../img/svg/back.svg';

class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: this.props.gallery,
            property: this.props.gallery[0],
            index: 0
        }
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        document.addEventListener("keydown", this.escFunction);
      }
    
      componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
        document.removeEventListener("keydown", this.escFunction);
      }
      escFunction=(event)=>{
        if(event.keyCode === 27) {
          this.closePopup();
        }
      }
    setWrapperRef=(node) => {
        this.wrapperRef = node;
      }
      handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
          this.closePopup();
        }
      }
    closePopup = () => {
        this.props.closing()
    }
    showNext = () => {
        const newIndex = this.state.index + 1;
        this.setState({
            property: this.props.gallery[newIndex],
            index: newIndex
        })
        
    }
    showPrev = () => {
        const newIndex = this.state.index - 1;
        this.setState({
            property: this.props.gallery[newIndex],
            index: newIndex
        })
    }
    showIdFoto(id){
        this.setState({
            property: this.props.gallery[id],
            index: id
        })
    }
    render() {
        const { properties, property } = this.state;
        return (
            <div className='popup'>
                <div ref={this.setWrapperRef} className='popup-content'>
                    <div className='popup-content-left'>
                        <div className='popup-foto-slider-wrapper'
                            style={{
                                'transform': `translateX(-${this.state.index * 100}%)`
                            }}>
                            {
                                properties.map(property => <img className='popup-foto' src={property.big} alt='foto' />)
                            }
                        </div>
                        <button
                            onClick={this.showPrev}
                            disabled={this.state.index === 0}
                            className='popup-btn popup-btn--prev'>
                            <img className='popup-arrow popup-arrow--prev' src={arrowDown} />
                        </button>
                        <button
                            onClick={this.showNext}
                            disabled={this.state.index === properties.length - 1}
                            className='popup-btn popup-btn--next'>
                            <img className='popup-arrow popup-arrow--next' src={arrowDown} />
                        </button>

                        <div className='popup-foto-slider-wrapper popup-foto-slider-wrapper--thumbnails'>
                            {
                                properties.map(property =>
                                    <button onClick={()=>this.showIdFoto(property.id)} className='popup-foto-btn'>
                                        <img
                                            className={this.state.index === property.id ? 'popup-foto-thumbnail popup-foto-thumbnail--active' : 'popup-foto-thumbnail'}
                                            src={property.thumbnail}
                                            alt='foto' />
                                    </button>)
                            }

                        </div>


                    </div>
                    <div className='popup-content-right'>
                        <div className='popup-title'>{this.props.title}</div>

                        <div className='popup-description'>{this.props.description}</div>

                    </div>
                    <button className='btn-exit' onClick={this.closePopup}>
                        <div className='line line--up'/>
                        <div className='line line--down'/>
                    </button>


                </div>

            </div>
        )
    }
}

export default Popup;