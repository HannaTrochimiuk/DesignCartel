import React, { Component } from 'react';
import ValueBox from './ValueBox';
import planet from '../img/svg/planet-earth.svg';
import design from '../img/svg/design.svg';
import people from '../img/svg/people.svg';
import darkPeople from '../img/svg/dark-people.svg';
import darkDesign from '../img/svg/dark-design.svg';
import darkPlanet from '../img/svg/dark-planet-earth.svg';
import recycle from '../img/recycle.png';
import ValueService from '../common/ValueService';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


class Values extends Component {
    constructor(props) {
        super(props);
        this.valueService = new ValueService();
        this.values = this.valueService.getValue();
        this.state = {
            appearText: false
        };

    }

    toggleAppear = () => {
        this.setState({
            appearText: false,
            activeValue:null,
            index:null
        })
    };
    setActiveBox = (index) => {
        this.setState({
            activeValue: this.values[index],
            index: index,
            appearText:true
        })
    };

    render() {
        return (
            <div className='values-box'
            onMouseLeave={() => this.toggleAppear()}
            >
                <div className="values">
                    <ValueBox
                        className={this.state.index == 0 ? 'value-box value-box-active' : 'value-box'}
                        onMouseEnter={() => this.setActiveBox(0)}
                        iconWhite={people}
                        title='Człowiek w przestrzeni' />
                    <ValueBox
                        className={this.state.index == 1 ? 'value-box value-box-active' : 'value-box'}
                        onMouseEnter={() => this.setActiveBox(1)}
                        iconWhite={design}
                        title='Design' />
                    <ValueBox
                        className={this.state.index == 2 ? 'value-box value-box-active' : 'value-box'}
                        onMouseEnter={() => this.setActiveBox(2)}
                        iconWhite={recycle}
                        title='Zero waste' />
                    <ValueBox
                        className={this.state.index == 3 ? 'value-box value-box-active' : 'value-box'}
                        onMouseEnter={() => this.setActiveBox(3)}
                        iconWhite={planet}
                        title='Eco Friendly' />
                </div>


                <div className= {this.state.appearText ? 'value-text-box' : 'value-text-box hight-none'}>
                    <TransitionGroup>
                        <CSSTransition
                            key={this.state.index}
                            timeout={600}
                            classNames='slide'
                            in={this.state.appearText}
                            appear={true}
                        >
                        {this.state.appearText ?  <div className='value-text-frame'>{this.state.activeValue.text}</div> :<div />}
                           
                        </CSSTransition>

                    </TransitionGroup>
                </div>




            </div>
        )
    };
}

export default Values;
