import React, { Component } from 'react';
import ValueBox from './ValueBox';
import planet from '../img/svg/planet-earth.svg';
import design from '../img/svg/design.svg';
import people from '../img/svg/people.svg';
import recycle from '../img/recycle.png';
import { FormattedMessage } from 'react-intl'
import { CSSTransition } from 'react-transition-group';
import ReactCSSTransitionReplace from 'react-css-transition-replace';



class Values extends Component {
    constructor() {
        super();
        this.state = ({
            inProp: false
        })
    };
    changeKey = (key) => {
        this.setState({
            key: key,
            inProp: true
        })
    };

    hideText = () => {
        this.setState({
            key: ' ',
            inProp: false
        })
    };

    render() {
        return (
            <div className='values-box' onMouseLeave={() => this.hideText()}>
                <div className="values-circles"  >
                    <ValueBox
                        className={this.state.key === "valueTextHuman" ? 'value-box value-box-active' : 'value-box'}
                        onMouseEnter={() => this.changeKey("valueTextHuman")}
                        iconWhite={people}
                        id="valueHuman" />
                    <ValueBox
                        className={this.state.key === "valueTextDesign" ? 'value-box value-box-active' : 'value-box'}
                        onMouseEnter={() => this.changeKey("valueTextDesign")}
                        iconWhite={design}
                        id="valueDesign" />
                    <ValueBox
                        className={this.state.key === "valueTextZeroWaste" ? 'value-box value-box-active' : 'value-box'}
                        onMouseEnter={() => this.changeKey("valueTextZeroWaste")}
                        iconWhite={recycle}
                        id="valueZeroWaste" />
                    <ValueBox
                        className={this.state.key === "valueTextEcoFriendly" ? 'value-box value-box-active' : 'value-box'}
                        onMouseEnter={() => this.changeKey("valueTextEcoFriendly")}
                        iconWhite={planet}
                        id="valueEcoFriendly" />
                </div>
                <CSSTransition
                    in={this.state.inProp}
                    timeout={800}
                    classNames='appear'
                    unmountOnExit>
                    <div>
                        <ReactCSSTransitionReplace transitionName="replace"
                            transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                            <div key={this.state.key} className='values-text' >
                                <FormattedMessage id={this.state.key} />
                            </div>
                        </ReactCSSTransitionReplace>
                    </div>
                </CSSTransition>
            </div>
        )
    };
}

export default Values;
