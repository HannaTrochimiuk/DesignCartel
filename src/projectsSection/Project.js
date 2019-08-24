import React, { Component } from 'react'
import Popup from './Popup';

class Project extends Component {
    constructor(props) {
        super(props);
       
    }


    render() {
        console.log(this.props.project);
        return (
            <div className='project-container'>
                <button className='project-box' onClick={this.props.onSelected}>
                    <div className="project-foto" style={{ backgroundImage: 'url(http://localhost:5000/' + this.props.project.photoUrls[0] + ')' }}>&nbsp;</div>
                    <div className="project-text">{this.props.project.name}</div>

                </button>
            </div>
        )
    }
}

export default Project;