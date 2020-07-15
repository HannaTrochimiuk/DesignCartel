import React, { Component } from 'react'
import App from '../App';

class Project extends Component {
   
    changeString = () =>{
        const fileName =  this.props.project.fileNames[0];
        console.log(App.baseURL);
        return('url(' + App.baseURL + fileName.replace('.',this.props.projectImgInfix) + ')');
        
    }
    render() {
        return (
            <div className='project-container'>
                <button className='project-box' onClick={this.props.onSelected}>
                    <div className="project-foto"
                        style={{ backgroundImage: this.changeString() }}
                    >&nbsp;</div>
                    <div className="project-text">{this.props.project.name}</div>
                </button>
            </div>
        )
    }
}

export default Project;