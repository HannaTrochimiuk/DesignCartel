import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl'


class Service extends Component{
    render(){
        return(
            <div className="service">
                    <div style={{ backgroundImage: this.props.element.foto}}
                        className="service-foto"></div>
                    <div className={this.props.element.textFirst ?
                                    "service-text-box service-text-box--textFirst":
                                    "service-text-box"}>
                        <div className="service-title">
                            <FormattedMessage id={this.props.element.idTitle} />
                        </div>
                        <div className="service-text">
                            <FormattedMessage id={this.props.element.idText} />
                        </div>
                    </div>
                </div>
        )
    }
}

export default Service;