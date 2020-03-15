import React, { Component } from 'react'
import Popup from './Popup';
import {FormattedMessage} from 'react-intl'


class Project extends Component {
    constructor(props) {
        super(props);
       
    }


    render() {
        console.log(this.props.project);
        return (
            <div className='project-container'>
                <button className='project-box' onClick={this.props.onSelected}>
<<<<<<< HEAD
                    <div className="project-foto" style={{ backgroundImage: 'url(http://localhost:5000/' + this.props.project.photoUrls[0] + ')' }}>&nbsp;</div>
                    <div className="project-text">{this.props.project.name}</div>
=======
                    <div className="project-foto" style={{ backgroundImage: 'url(' + this.props.projekt.foto + ')' }}>&nbsp;</div>
                    <div className="project-text"><FormattedMessage id={this.props.projekt.title}/></div>
>>>>>>> master

                </button>
            </div>
        )
    }
}

export default Project;