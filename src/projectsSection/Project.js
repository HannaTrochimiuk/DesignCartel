import React, { Component } from 'react'
import Popup from './Popup';
import {FormattedMessage} from 'react-intl'


class Project extends Component {
    constructor(props) {
        super(props);
       
    }


    render() {
        return (
            <div className='project-container'>
                <button className='project-box' onClick={this.props.onSelected}>
                    <div className="project-foto" style={{ backgroundImage: 'url(' + this.props.projekt.foto + ')' }}>&nbsp;</div>
                    <div className="project-text"><FormattedMessage id={this.props.projekt.title}/></div>

                </button>
            </div>
        )
    }
}

export default Project;