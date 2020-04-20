import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import Gallery from './Gallery';

class Popup extends Component {

    setWrapperRef = (node) => {
        this.wrapperRef = node;
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.closePopup();
        }
    }
    render() {
        return (
            <CSSTransition
                in={this.props.in}
                timeout={600}
                classNames='fade'
                unmountOnExit>
                <div className='popup'>
                    <CSSTransition
                        in={this.props.in}
                        timeout={600}
                        classNames='scale'
                        unmountOnExit
                        appear>
                        {this.props.project ?
                            <div ref={this.setWrapperRef} className='popup-content'>
                                <div className='popup-content-left'>
                                    <Gallery project={this.props.project} />
                                </div>
                                <div className='popup-content-right'>
                                    <div className='popup-title'>{this.props.project.name}</div>
                                    <div className='popup-description'>{this.props.project.description}</div>
                                    <button className='btn-exit' onClick={this.props.closePopup}>
                                        <div className='line line--a'></div>
                                        <div className='line line--b'></div>
                                    </button>
                                </div>
                            </div> :
                            <div/>}
                    </CSSTransition >
                </div>
            </CSSTransition >
        )
    }  
}

export default Popup;