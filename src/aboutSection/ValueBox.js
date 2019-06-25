import React, { Component } from 'react';


class ValueBox extends Component {
    render() {
        return (
            <div className={this.props.className} onMouseEnter={this.props.onMouseEnter}>
                <div className="value-box__side value-box__side--front">
                    <div className="value-icon-white">
                        <img className='svg-size' src={this.props.iconWhite} />
                    </div>
                    
                </div>   
                <div className="value-box__side value-box__side--back">
                    {this.props.title}
                </div>    

            </div>
        )
    };
}

export default ValueBox;
