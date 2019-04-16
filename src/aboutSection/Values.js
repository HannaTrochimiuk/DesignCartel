import React, {Component} from 'react';
import ValueBox from './ValueBox';

class Values extends Component{
    render(){
        return(
            <div className="values">
                <ValueBox/>
                <ValueBox/>
                <ValueBox/>
                <ValueBox/>
            </div>
        )
    };
}
export default Values;