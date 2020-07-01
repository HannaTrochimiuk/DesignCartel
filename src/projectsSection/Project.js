import React, { Component } from 'react'

class Project extends Component {
   
    changeString = () =>{
        const fileName =  this.props.project.fileNames[0];
        return('url(http://localhost:5000/' + fileName.replace('.',this.props.projectImgInfix) + ')');
        
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