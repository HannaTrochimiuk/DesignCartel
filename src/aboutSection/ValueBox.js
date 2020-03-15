import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';
import App from '../App.js';

class ValueBox extends Component {
    render() {
        return (
            <div className={this.props.className} onMouseEnter={this.props.onMouseEnter}>
                <div className="value-box__side value-box__side--front">
                    <div className="value-icon-white">
                        <img className='svg-size' src={this.props.iconWhite} />
                    </div>  
                </div>   
                <div className=
                    {App.language == "pl" ? "value-box__side value-box__side--back pl"
                    : "value-box__side value-box__side--back en"}>
                    <FormattedMessage id={this.props.id} />
                </div>    

            </div>
        )
    };
}

export default ValueBox;
