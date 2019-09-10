import React, { Component } from 'react';
import ValueBox from './ValueBox';
import planet from '../img/svg/planet-earth.svg';
import design from '../img/svg/design.svg';
import people from '../img/svg/people.svg';
import recycle from '../img/recycle.png';
import ValueService from '../common/ValueService';
import { FormattedMessage } from 'react-intl'

import { CSSTransition, TransitionGroup } from 'react-transition-group';


class Values extends Component {
    constructor(props) {
        super(props);
        // this.valueService = new ValueService();
        // this.values = this.valueService.getValue();
        this.state = {
            appearText: false
        };
    }

    toggleAppear = () => {
        this.setState({
            appearText: false,
            activeValue: null,

        })
    };
    setActiveBox = (id) => {
        this.setState({
            activeValue: id,
            appearText: true
        })
    };

    render() {
        return (
            <div className='values-box'
                onMouseLeave={() => this.toggleAppear()}
            >
                <div className="values">
                    <ValueBox
                        className={this.state.activeValue == "valueTextHuman" ? 'value-box value-box-active' : 'value-box'}
                        onMouseEnter={() => this.setActiveBox("valueTextHuman")}
                        iconWhite={people}
                        id="valueHuman" />
                    <ValueBox
                        className={this.state.activeValue == "valueTextDesign" ? 'value-box value-box-active' : 'value-box'}
                        onMouseEnter={() => this.setActiveBox("valueTextDesign")}
                        iconWhite={design}
                        id="valueDesign" />
                    <ValueBox
                        className={this.state.activeValue == "valueTextZeroWaste" ? 'value-box value-box-active' : 'value-box'}
                        onMouseEnter={() => this.setActiveBox("valueTextZeroWaste")}
                        iconWhite={recycle}
                        id="valueZeroWaste" />
                    <ValueBox
                        className={this.state.activeValue == "valueTextEcoFriendly" ? 'value-box value-box-active' : 'value-box'}
                        onMouseEnter={() => this.setActiveBox("valueTextEcoFriendly")}
                        iconWhite={planet}
                        id="valueEcoFriendly" />
                </div>


                <div className={this.state.activeValue ? 'value-text-box' : 'value-text-box hight-none'}>
                    <TransitionGroup>
                        <CSSTransition
                            key={this.state.activeValue}
                            timeout={600}
                            classNames='slide'
                            in={this.state.appearText}
                            appear={true}
                        >
                            {this.state.appearText ?
                                <div className='value-text-frame'>
                                    <FormattedMessage id={this.state.activeValue} />
                                </div> : <div />}

                        </CSSTransition>

                    </TransitionGroup>
                </div>




            </div>
        )
    };
}

export default Values;
