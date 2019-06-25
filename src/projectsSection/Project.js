import React, { Component } from 'react'
import Popup from './Popup';

class Project extends Component {
    constructor(props) {
        super(props);
       
    }


    render() {
        return (
            <div className='project-container'>
                <button className='project-box' onClick={this.props.onSelected}>
                    <div className="project-foto" style={{ backgroundImage: 'url(' + this.props.projekt.foto + ')' }}>&nbsp;</div>
                    <div className="project-text">{this.props.projekt.title}</div>

                </button>
            </div>
        )
    }
}

export default Project;