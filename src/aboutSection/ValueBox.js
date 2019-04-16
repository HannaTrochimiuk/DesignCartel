import React, { Component } from 'react';
import planet from '../img/svg/planet-earth.svg';

class ValueBox extends Component {
    render() {
        return (
            <div className="value-box">
                <div className="value-box__side value-box__side--front">
                    <img src={planet} />
                </div>
                <div className="value-box__side value-box__side--back">
                    <div className="value-name">Lorem ipsum</div>
                </div>
            </div>
        )
    };
}

export default ValueBox;
