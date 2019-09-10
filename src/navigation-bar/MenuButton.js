import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl'


class MenuButton extends Component {
    constructor(props) {
        super(props);
        this.scrollTo = this.scrollTo.bind(this)
    }
    scrollTo() {
        var element = document.querySelector('.' + this.props.id)
        var headerOffset = 45;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition - headerOffset + window.scrollY;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    render() {
        return (
            <button className={this.props.class} id={this.props.id} onClick={this.scrollTo}>
                <div className="btn-menu-text">
                    <FormattedMessage id={this.props.idText} />
                </div>
            </button>
        );
    }
}

export default MenuButton;